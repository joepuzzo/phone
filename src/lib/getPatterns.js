// Importing from `.json.js` a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239
import patterns from '../data/patterns.json.js';
// import patterns from '../data/patterns.json';

/** ---------------------------------------------------------------------------------------
 * getPatterns
 * 
 * @param {string} country - The two letter country string
 *
 * @return {Object} patterns for that country
 */
export const getPatterns = (country) => {
  return patterns[country];
}