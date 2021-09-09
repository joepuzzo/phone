import { getFormats } from './getFormats.js';

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
export const phoneFormatter = ( value, country ) => {

    // Grab formatters array from the formatters object based on country
    const formatters = getFormats(country) && getFormats(country).formatters;

    // We dont have any formatters for this country
    if( !formatters || formatters.length === 0 ){
      console.warn(`intl-phone does not currently support country ${country}, so the value passed was returned.`);
      return DEFAULT_MASK;
    }

    // Now we need to make a guess as to which formatter to use!
    const matched = formatters.find( format => formatMatches( format, value ));

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
    const parsedFormatter = Array.isArray(matched.formatter) ? matched.formatter.map( m => m.length === 1 ? m : new RegExp(m) ) : matched.formatter;

    // console.log('Parsed', parsedFormatter);

    return parsedFormatter;
};