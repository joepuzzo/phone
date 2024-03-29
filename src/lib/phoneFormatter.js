import { getFormats } from './getFormats.js';
import { getCountryCode } from './getCountryCode.js';

/** ---------------------------------------------------------------------------------------
 * formatMatches 
 * 
 * Determines what format to use based on the leading digits of the phone number 
 * Why: 
 * 1. because numbers format differently depending on what type ( mobile, toll-free, landline )
 * 2. because numbers format differently depending on where they come from within a country
 * 
 * 
 * @param {*} format 
 * @param {*} leadingDigits 
 * @returns 
 */
 const formatMatches = (format, leadingDigits) => {
  // Brackets are required for `^` to be applied to
  // all or-ed (`|`) parts, not just the first one.
  const leadingDigitsPattern = format.leadingDigitsPattern;
  return new RegExp(`^(${leadingDigitsPattern})`).test(leadingDigits)
};

// The user may not pass enough numbers to determine proper format, therefore we default to allow any numbers 
const DEFAULT_MASK = [/\(|\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ];

/** ---------------------------------------------------------------------------------------
 * phoneFormatter
 * 
 * A formatter function to be fed to the format function 
 * 
 * Takes a values and a country ---> outputs a formatter function
 * 
 * @param {string} value - The value to be formatted
 * @param {string} country - The two letter country code to be used
 *
 * @return {[string]} A mask array
 */
export const phoneFormatter = ( val, country, options = {} ) => {

    // Initialize the value
    let value = val;

     // Grab formatters array from the formatters object based on country
     const formatters = getFormats(country) && getFormats(country).formatters;
     const formatData = getFormats(country);

    // If we are national take off the first zero if its there 
    // nddPrefix = 0 || 06 
    if( options.format === 'national' && val && val.slice(0,formatData.nddPrefix.length) == formatData.nddPrefix ){
      value = value.slice(formatData.nddPrefix.length,value.length);
    }

    // We dont have any formatters for this country
    if( !formatters || formatters.length === 0 ){
      console.warn(`intl-phone does not currently support country ${country}, so the value passed was returned.`);
      return DEFAULT_MASK;
    }

    const includeCountryCode = options.format == 'E164' || options.format === 'international' || options.outOf
    // If we are international format and there is a "+" remove the + and country code
    if(includeCountryCode && value && value.includes('+')){
     value = value.slice(formatData.countryCode.length + 1,value.length);
    }

    // Now we need to make a guess as to which formatter to use!
    const matchedFormatters = formatters.filter( format => formatMatches( format, value ));

    // First assume one single match
    let matched = matchedFormatters[0];

    // If we have more than one match 
    if(matchedFormatters.length > 1){
      // Find best match based on length

      // Example: 501756647 will match both below but only fits in one
      // 
      // "matchedFormatters": [
      //   {
      //     "leadingDigitsPattern": "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
      //     "formatter": "###-### ##",
      //     "internationalFormat": "### ### ##"
      //   },

      //   {
      //     "leadingDigitsPattern": "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
      //     "formatter": "###-## ## ##",
      //     "internationalFormat": "### ## ## ##"
      //   },
      // ]

      // "501756647".length is 9 ... "###-### ##".match(/#/g).length is 8 so throw that out
      // "501756647".length is 9 ... "###-## ## ##".match(/#/g).length is 9 so we are good!
      const bestMatch = matchedFormatters.find( format => {
        // TODO we currently only find best match for format strings need to maybe update for regex arrays!
        if(typeof format.formatter === 'string'){
          return `${value}`.length <= format.formatter.match(/#/g).length 
        }
      })

      // Only set if we found best match otherwise leave what was OG found 
      if( bestMatch ){
        matched = bestMatch;
      }
    }

    // We don't have enough information to determine which format to use
    if( !matched ){
      // TODO turn off warning based on option 
      console.warn(`The value ${value} does not match any formats.`);
      return DEFAULT_MASK;
    }

    // console.log( 'Number:', value, 'Formatter:', matched.formatter );

    // Example Formatter: "## ### ####"
    // Example Formatter: ["(", "[2-9]", "\\d", "\\d", ")", " ", "\\d", "\\d", "\\d", "-", "\\d", "\\d", "\\d", "\\d" ]
    // 
    // What does this line do ??? 
    //
    // 1. If its NOT an array then its a format string "## ### ####" so we just return it 
    // 
    // 2. If it is an array, then we need to turn the values into regex if they are
    //   
    // Example "\\d" ==> /\d/
    // Example "("   ==> "("
    let parsedFormatter = Array.isArray(matched.formatter) ? matched.formatter.map( m => m.length === 1 ? m : new RegExp(m) ) : matched.formatter;

    // console.log('Parsed', parsedFormatter);

    if( options ){
 
      let countryCode = includeCountryCode ? getCountryCode(country) : '';

      const includePlusSymbol = options.plusSymbol != null ? options.plusSymbol : ( options.format == 'E164' || options.format == 'international');
      let plusSymbol = includePlusSymbol ? ['+'] : [];

      let iddPrefix = options.outOf ? getFormats(options.outOf).iddPrefix : '';

      let nddPrefix = options.format === 'national' ? getFormats(country).nddPrefix : ''

      // Push on space to iddPrefix if we are going outOf
      if(options.outOf){
        iddPrefix += ' ';
      }

      // Push space on country code if user asked for outOf
      if( options.outOf || options.format === 'international' ){
        countryCode += ' ';
      }

      // Remove anything thats not plus or number
      // if(options.format === 'E164'){
      //   parsedFormatter = Array.isArray(parsedFormatter) ? parsedFormatter.filter( c => c === /\d/ ) : parsedFormatter.replace(/[^#]/g, '');
      // }
      
      if(Array.isArray(parsedFormatter)){
        parsedFormatter = [ ...plusSymbol, ...iddPrefix, ...nddPrefix, ...countryCode.split(''), ...parsedFormatter];
      } else {
        parsedFormatter = [ ...plusSymbol,  ...iddPrefix, ...nddPrefix, ...countryCode.split(''), ...parsedFormatter].join('');
      }

    }

    // console.log('HERE', parsedFormatter);

    return parsedFormatter;
};