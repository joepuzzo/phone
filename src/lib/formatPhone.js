
import { phoneFormatter } from './phoneFormatter';
import { format } from './formatter';
import { getFormats } from './getFormats';

/** ---------------------------------------------------------------------------------------
 * formatPhone
 * 
 * @param {string} value - The value to be formatted
 * @param {string} country - The two letter country code to be used
 *
 * @return {string} The formatted phone number
 */
export const formatPhone = (value, country, options = {}) => {
  let v = `${value}`;

  // Get format data
  const formatData = getFormats(country);

  // Determine if we are including country code
  const includeCountryCode = options.format == 'E164' || options.format === 'international' || options.outOf
  // If we are not supposed to include the country code and there is a "+" remove the + and country code
  if(!includeCountryCode && v && v.includes('+')){
    v = value.slice(formatData.countryCode.length + 1,value.length);
  }
  return format( v, (val) => phoneFormatter(val, country, options))
}