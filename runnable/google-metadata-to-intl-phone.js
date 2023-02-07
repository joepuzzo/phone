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
      // console.log(`No international format for ${country}`);
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

// Below is old manual list
// const supported = ["US","CA","PR","MX","AE","JO","IL","BE","HR","CZ","DK","DE","GR","ES","FR","GB","IE","IS","IT","LU","NL","NO","AT","PL","PT","PL","CH","SE","FI","CN","HK","MO","TW","JP","KR","AU","NZ","SG","IN","ZA","RO","HU","EE","SI","SK","TR","LT","LV","BG","NG","TH"];

// Below is every single country
// const supported = ["AC","AD","AE","AF","AG","AI","AL","AM","AO","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GT","GU","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TA","TC","TD","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW"];

// Below is what we currenrly support as some of the countries above have no mapping
const supported = ["AD","AE","AF","AL","AM","AO","AR","AT","AU","AW","AZ","BA","BD","BE","BF","BG","BH","BI","BJ","BN","BO","BR","BT","BW","BY","BZ","CA","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CY","CZ","DE","DJ","DK","DZ","EC","EE","EG","ER","ES","ET","FI","FJ","FM","FO","FR","GA","GB","GE","GF","GH","GI","GL","GM","GN","GP","GQ","GR","GT","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IN","IO","IQ","IR","IS","IT","JO","JP","KE","KG","KH","KM","KP","KR","KW","LA","LB","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MK","ML","MM","MN","MO","MQ","MR","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SI","SK","SL","SM","SN","SO","SR","SS","ST","SV","SY","SZ","TD","TG","TH","TJ","TL","TM","TN","TO","TR","TV","TW","TZ","UA","UG","US","UY","UZ","VE","VN","VU","WF","WS","XK","YE","ZA","ZM","ZW"];

/** ------------------------------------------------------------
 * Full output
 */
Object.entries(parsedInput.countries)
.filter(([key]) => supported.find( s => s === key) )
.map(([key, value]) => {
  return {
    country: key,
    countryCode: value.phone_code,
    iddPrefix: value.default_idd_prefix || value.idd_prefix,
    nddPrefix: value.national_prefix,
    formatters: generateFormatter( value.formats, key ),
    examples: value.examples,
    pattern: value.national_number_pattern 
  }
}).forEach( c => output[c.country] = c );

/** ------------------------------------------------------------
 * Safety check to look for missing data 
 */
const keys = Object.keys(output);
supported.forEach( m => { 
  if( !keys.find( s => s === m) ) {
    console.log('Unable to map', m);
  }
})

let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

const mapped = [];
const failed = [];

Object.entries(output).forEach(([key, val]) => { 
  if(!val.formatters || val.formatters.length === 0) {
    console.log('No formatters for', key)
    failed.push(key);
  } else {
    mapped.push(key);
  }
});

console.log('Successfully mapped these', JSON.stringify(mapped));

console.log('-----------------------------');

const successList = mapped.map(key => {
  return regionNames.of(key);  // example: "United States"
});

console.log('Success list',JSON.stringify(successList));

console.log('----------------------------------------------------');

console.log('Failed ot map these',JSON.stringify(failed));

console.log('-----------------------------');

const failedNames = failed.map(key => {
  return regionNames.of(key);  // example: "United States"
});

console.log('Failed list',JSON.stringify(failedNames));

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

// Ok so we may have made some edits to the file so lets read in our files and only add whats missing 
const ourFormats = JSON.parse(fs.readFileSync(`${__dirname}/../src/data/formats.json`, 'utf-8'));
const ourExamples = JSON.parse(fs.readFileSync(`${__dirname}/../src/data/examples.json`, 'utf-8'));
const ourPatterns = JSON.parse(fs.readFileSync(`${__dirname}/../src/data/patterns.json`, 'utf-8'));

Object.entries(ourFormats).forEach(([key, value])=>{
  // Override with existing value
  phoneFormats[key] = value;
});

Object.entries(ourExamples).forEach(([key, value])=>{
  // Override with existing value
  examples[key] = value;
})

Object.entries(ourPatterns).forEach(([key, value])=>{
  // Override with existing value
  patterns[key] = value;
})

// For output to you the user we log what was added!
const newlyAddedFormats = [];
const newlyAddedExamples = [];
const newlyAddedPatterns = [];

Object.keys(phoneFormats).forEach((key)=>{
  if( !ourFormats[key] ){
    newlyAddedFormats.push(key);
  }
})

Object.keys(examples).forEach((key)=>{
  if( !ourExamples[key] ){
    newlyAddedExamples.push(key);
  }
})

Object.keys(patterns).forEach((key)=>{
  if( !ourPatterns[key] ){
    newlyAddedPatterns.push(key);
  }
})

console.log('----------------------------------------------------');

console.log('Newly Added Formats', JSON.stringify(newlyAddedFormats));
console.log('Newly Added Examples', JSON.stringify(newlyAddedExamples));
console.log('Newly Added Patterns', JSON.stringify(newlyAddedPatterns));

const newNames = newlyAddedFormats.map(key => {
  return regionNames.of(key);  // example: "United States"
});

console.log('Newly Added list',JSON.stringify(newNames));

// Finally output new files

fs.writeFileSync(`${__dirname}/output/full.json`, JSON.stringify(output, null, 2) );
fs.writeFileSync(`${__dirname}/output/formats.json`, JSON.stringify(phoneFormats, null, 2) );
fs.writeFileSync(`${__dirname}/output/examples.json`, JSON.stringify(examples, null, 2) );
fs.writeFileSync(`${__dirname}/output/patterns.json`, JSON.stringify(patterns, null, 2) );
