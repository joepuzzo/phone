// Importing from `.json.js` a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239
import examples from '../data/examples.json.js';
// import phoneFormats from '../data/formats.json';

/** ---------------------------------------------------------------------------------------
 * getExample
 * 
 * @param {string} country - The two letter country string
 * @param {string} type - The type of example. e.g ["fixed", "mobile", "tollfree"]
 *
 * @return {string} An example number
 */
export const getExample = (country, type) => {
  const exmpls = examples[country];
  if( !exmpls ){
    console.warn(`intl-phone does not currently support country ${country}`);
    return;
  }
  return exmpls[type];
}