import { getPatterns } from './getPatterns'

/**
 * 
 * @param {string} value 
 * @param {string} country 
 */
export const validatePhone = (value, country) => {

  // Get the pattern
  const countriesPatterns = getPatterns(country);

  // Check to make sure we support this country
  if( !countriesPatterns ){
    console.warn(`intl-phone does not currently support country ${country}.`);
    return false;
  }

  // Get the pattern based on country code
  const pattern = `^(${countriesPatterns.national})$` ;

  // Determine if the value matches
  const matches = new RegExp(pattern).test(value);

  // Must match the pattern
  return matches;
};