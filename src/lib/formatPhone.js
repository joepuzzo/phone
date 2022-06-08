
import { phoneFormatter } from './phoneFormatter';
import { format } from './formatter';

/** ---------------------------------------------------------------------------------------
 * formatPhone
 * 
 * @param {string} value - The value to be formatted
 * @param {string} country - The two letter country code to be used
 *
 * @return {string} The formatted phone number
 */
export const formatPhone = (value, country, options) => {
  const v = `${value}`;
  return format( v, (val) => phoneFormatter(val, country, options) )
}