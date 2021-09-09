// Importing from `.json.js` a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239
import phoneFormats from '../data/formats.json.js';
// import phoneFormats from '../data/formats.json';

/** ---------------------------------------------------------------------------------------
 * getFormats
 * 
 * @param {string} country - The two letter country string
 *
 * @return {Object} formats for that country
 */
export const getFormats = (country) => {
  return phoneFormats[country];
}