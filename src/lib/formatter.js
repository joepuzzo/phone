/** --------------------------------------------------------------------------------------------
 * Helper function for getFormatter
 * @param {*} formatter 
 * @returns 
 */
 const formatterFromString = (formatter) => {
  return formatter.split('').map(char => {
    if (char === '#') {
      return /\d/;
    }

    if (char === '*') {
      return /[\w]/;
    }

    return char;
  });
}

/** --------------------------------------------------------------------------------------------
 * Helper function for getting a formatter 
 * 
 * @param {*} formatter 
 * @param {*} value 
 * @returns 
 */
const getFormatter = (formatter, value) => {

	// If mask is a string turn it into an array;
  if (typeof formatter === 'string') {
    return formatterFromString(formatter);
  }

	// If mask is a function use it to genreate current mask
  if(typeof formatter === 'function'){
    const fmtr = formatter(value);

    if (typeof fmtr === 'string') {
      return formatterFromString(fmtr);
    }
    return fmtr;
	}

	if(Array.isArray(formatter)){
		return formatter;
	}

	// Should never make it here throw
	throw new Error('Formatter must be string, array, or function')
}

/** --------------------------------------------------------------------------------------------
 * Helper function for matching and index 
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const matchingIndex = ( a, b ) => {
  let i = 0;
  let mi = -1;
  let matching = true;
  // a = "+1 "
  // b = "+12"
  while(matching && i < a.length ){

    if( a[i] == b[i] ){
      mi = i; 
    } else {
      matching = false;
    }

    i = i +1;
  }

  return mi;
}

/** --------------------------------------------------------------------------------------------
 * 
 * @param {*} value 
 * @param {*} frmtr 
 * @returns 
 */
export const format = ( value, frmtr ) => {

  // Null check
  if( !value ){
    return value;
  }

	// Generate formatter array
	const formatter = getFormatter( frmtr, value );


	// Start to fill in the array
	// Example: phone formatter
	// formatter =['+', '1', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  // value examples:
	// "1231231234 ----> +1 123-123-1234 
	// "+" 				 ----> +
	// "+1" 			 ----> +1
	// "+2"				 ----> +1 2
	// "1"				 ----> +1 1
	// "1234"			 ----> +1 123-4	
  // "123a"      ----> +1 123
  
  // Determine prefix length and suffix start
  const prefixLength = formatter.findIndex( v => typeof v != 'string');
  const suffixStart =  formatter.length - [...formatter].reverse().findIndex( v => typeof v != 'string');

  // Formatted value
  let formatted = [];

  // The characters from the current value
  const chars = value.split('');

  // To track the value index during itteration
  let vIndex = 0;

  let start = 0;

  // If the value matches part of the prefix take it out
  // Example prefix = "+1 " value = ["+1 123-123-1234", "+12", "+2"]
  const matchIndex = matchingIndex(formatter.slice(0, prefixLength), chars.slice(0, prefixLength));
  if( matchIndex > -1 ) {
    //vIndex = prefixLength;
    vIndex = matchIndex + 1;
    formatted = formatted.concat(formatter.slice(0,matchIndex + 1));
    start = matchIndex + 1;
  }
  // Example prefix = "+1 " value=["1", "1234"]
  if( matchIndex < 0 ){
    // Start past the prefix
    formatted = formatted.concat(formatter.slice(0,prefixLength));
		start = prefixLength;
  }

  // console.log('start', start, formatted);
  // console.log('PREFIX_LENGTHT', prefixLength);
  // console.log('SUFIX_START', suffixStart);
  // console.log('FORMATTER_LENGTH', formatter.length);

  // To track if we have made it past the prefix
  let pastPrefix = false;

	// Fill in the stuff
  for(let i = start; i < formatter.length; i++ ){
  
    // Get current formatter location matcher
    const matcher = formatter[i];

    // We get past the prefix if matcher is not a string
    if( !pastPrefix && typeof matcher != "string" ){
      pastPrefix = true;
    }

    // Chec to see if there is more value to look at
    if( vIndex != chars.length ){

      // Get the current value character
      const curChar = chars[vIndex];

      // If type is string normal compare otherwise regex compare
      const match = typeof matcher === "string" ? matcher === curChar : matcher.test(curChar);

      // If the current character of the value matches and matcher is a string 
      // "1" === "1"
      if( match && typeof matcher === "string" ){
        formatted.push(matcher);
        //if( pastPrefix ){
          vIndex = vIndex + 1;
        //}
      }
      // If the current character does not match and matcher is a stirng 
      // "1" != "+"
      else if( !match && typeof matcher === "string"){
        // Special check for 123a ---> dont want "+1 123-"
        // Special check for 1234 ---> DO want "+1 123-4"
        if( vIndex != chars.length) formatted.push(matcher);
      }
      // If the current character matches and the matcher is not a string
      // /\d/.test("2")
      else if( match && typeof matcher != "string" ) {
        formatted.push(curChar);
        vIndex = vIndex + 1;
      }
      // If the current character does NOT match and the matecer is regex
      // /\d/.test("a")
      else if( !match && typeof matcher != "string" ){
        // Throw out this value
        vIndex = vIndex + 1;
        i = i - 1;
      }
    } else {
      // If mattcher is a string and we are at suffix keep going
      if( typeof matcher === "string" && i >= suffixStart ){
        formatted.push(matcher);
      } else {
        // Otherwise we want to break out
        break;
      }
    }

  }

  return formatted.join("");
      
}