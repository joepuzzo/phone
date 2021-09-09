// Importing from `.json.js` a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239
import supportedCountries from '../data/supportedCountries.json.js';
// import patterns from '../data/patterns.json';

/** ---------------------------------------------------------------------------------------
 * getSupportedCountries
 *  
 * @return {Array<string>} Array of supported country codes
 * 
 */
export const getSupportedCountries = () => {
  return supportedCountries;
}