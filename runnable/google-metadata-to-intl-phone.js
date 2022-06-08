import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create output dir if not already there 
const dir = `${__dirname}/output`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const path = process.argv[2];

if(!path){
  console.warn('UNABLE TO EXECUTE: A path to googles meta json file is required')
  process.exit(0);
}

// Read in googles metadata json file
const input = fs.readFileSync(__dirname + path);
const parsedInput = JSON.parse( input.toString() );

// For storing our full output
const output = {};

// Just formats
const phoneFormats = {};

// Just examples
const examples = {};

// Just patterns
const patterns = {};

/** ------------------------------------------------------------
 * Given a format and pattern from googles meta json file, generate a format array
 * 
 * formatExample  = ($1) $2-$3"
 * patternExample = (\\d{3})(\\d{3})(\\d{4,8})
 */
const generateFormatArray = ({ format, pattern }) => {

  // Create match array 
  // "{4,8}" ---> 8 
  // "{4}""  ---> 4
  // "(\\d)" ---> 1
  // pattern: "(\\d)(\\d{3})(\\d{3})(\\d{4,8})"
  // nArray: [ 1, 3, 3, 8 ]
  const nArray = pattern.match(/(\(\\d\))|(,\d\d*)|({\d+})/g).map( n => n.replace(/\\d/, '1').replace(/[^\d]/g, ''));

  // PATTERN (\d{2})(\d{3})(\d{3})
  // SECTIONS [ [ '#', '#' ], [ '#', '#', '#' ], [ '#', '#', '#' ] ]
  const sections = nArray.map( n => Array(+n).fill("#") )

  const formatter = [];

  // Example ($1) $2-$3" ----> 3
  const nSections = format.match(/\$\d/g).length;

  // Example "($1) $2-$3"
  // Split: [ '(', ') ', '-', '' ]
  const parts = format.split(/\$\d/);

  // Itteration example
  // 1: ['(', ["\\d", "\\d", "\\d"] ] 
  // 2: ['(', ["\\d", "\\d", "\\d"], ')', ["\\d", "\\d", "\\d"] ] 
  // 3: ['(', ["\\d", "\\d", "\\d"], ')', ["\\d", "\\d", "\\d"], '-', ["\\d", "\\d", "\\d", "\\d"] ] 
  for(let i = 0; i < nSections; i++ ){
    // push prefix (
    // example1: parts[i] --> '(' --> ['(']
    // example2: parts[i] --> ') ' --> [ ')', ' ' ]
    formatter.push(parts[i].split(''))

    // push that section ["\\d", "\\d", "\\d"]
    formatter.push(sections[i]);
  }

  // example "(###) ###-####"
  return formatter.flat().join('');
}

/** ------------------------------------------------------------
 * Generates formatters from googles meta formats
 * 
 * Example input: 
 * 
 * country: "US"
 * 
 * "formats": [
 *    {
 *      "pattern": "(\\d{3})(\\d{3})(\\d{4})",
 *        "leading_digits_patterns": [
 *          "[2-9]"
 *        ],
 *        "national_prefix_is_optional_when_formatting": true,
 *        "format": "($1) $2-$3",
 *        "international_format": "$1-$2-$3"
 *    }
 *  ],
 * 
 * Example output: 
 * [ 
 *    { 
 *      leadingDigitsPattern: '[2-9]', 
 *      formatter: '(###) ###-####' 
 *    } 
 * ]
 */
const generateFormatter = ( formats, country ) => {

  if( !formats ){
    console.log('NO format for', country);
    return;
  }

  const formatters = formats.map( format => { 
    if( !format.international_format ){
      console.log(`No international format for ${country}`);
    }
    const ret = {
      // The last leading_digits_pattern is used here, as it is the most detailed
      leadingDigitsPattern: format.leading_digits_patterns[format.leading_digits_patterns.length - 1],
      formatter: generateFormatArray( format ),
      // nationalPrefixFormattingRule: format.national_prefix_formatting_rule
    }

    if( format.international_format){
      ret.internationalFormat = generateFormatArray( { format: format.international_format, pattern: format.pattern } );
    }

    return ret;
    
  });

  return formatters;
}

/** ------------------------------------------------------------
 * What countries to include in output
 */
const supported = [
  "US",
  "CA",
  "PR", 
  "MX", 
  "AE", 
  "JO", 
  "IL", 
  "BE", 
  "HR", 
  "CZ", 
  "DK", 
  "DE", 
  "GR", 
  "ES", 
  "FR", 
  "GB", 
  "IE", 
  "IS",
  "IT", 
  "LU", 
  "NL", 
  "NO", 
  "AT", 
  "PL", 
  "PT", 
  "PL", 
  "CH", 
  "SE", 
  "FI", 
  "CN", 
  "HK",
  "MO", 
  "TW", 
  "JP", 
  "KR", 
  "AU", 
  "NZ", 
  "SG", 
  "IN", 
  "ZA", 
  "RO",
  "HU",
  "EE", 
  "SI", 
  "SK",
  "TR",
  "LT",
  "LV",
  "BG",
  "NG"
  ]

/** ------------------------------------------------------------
 * Full output
 */
Object.entries(parsedInput.countries).map(([key, value]) => {
  return {
    country: key,
    countryCode: value.phone_code,
    iddPrefix: value.default_idd_prefix || value.idd_prefix,
    nddPrefix: value.national_prefix,
    formatters: generateFormatter( value.formats, key ),
    examples: value.examples,
    pattern: value.national_number_pattern 
  }
}).filter(c => supported.find( s => s === c.country) ).forEach( c => output[c.country] = c );

/** ------------------------------------------------------------
 * Safety check to look for missing data 
 */
const keys = Object.keys(output);
supported.forEach( m => { 
  if( !keys.find( s => s === m) ) {
    console.log('Unable to map', m);
  }
})

Object.entries(output).forEach(([key, val]) =>{ if(!val.formatters) console.log('No formatters for', key)} )

/** ------------------------------------------------------------
 * Separate out data into sub objects
 */
Object.entries(output).forEach(([key, val]) =>{ 
  examples[key] = { 
    fixedline: val.examples.fixed_line,
    mobile: val.examples.mobile,
    tollfree: val.examples.toll_free
   };
   patterns[key] = {
     national: val.pattern,
   };
   phoneFormats[key] = {
    country: key,
    countryCode: val.countryCode,
    iddPrefix: val.idd_prefix,
    nddPrefix: val.nddPrefix,
    formatters: val.formatters,
  }
})

fs.writeFileSync(`${__dirname}/output/full.json`, JSON.stringify(output, null, 2) );
fs.writeFileSync(`${__dirname}/output/formats.json`, JSON.stringify(phoneFormats, null, 2) );
fs.writeFileSync(`${__dirname}/output/examples.json`, JSON.stringify(examples, null, 2) );
fs.writeFileSync(`${__dirname}/output/patterns.json`, JSON.stringify(patterns, null, 2) );
