// Importing from `.json.js` a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239
import phoneFormats from '../data/formats.json.js';
// import phoneFormats from '../data/formats.json';

/** ---------------------------------------------------------------------------------------
 * getCountryCode
 * 
 * @param {string} country - The two letter country string
 *
 * @return {string} The country code
 */
export const getCountryCode = (country) => {
  const formats = phoneFormats[country];
  if( !formats ){
    console.warn(`intl-phone does not currently support country ${country}`);
    return;
  }
  return formats.countryCode;
}