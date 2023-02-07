// PHONE FORMATTING

// -------------------------------------------------------
// First we take a look at numberFormatter to get idea of how things work

let numberFormatter = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR'});

numberFormatter.formatToParts('300');
// ====> 
// [
//   { type: 'currency', value: '€' },
//   { type: 'integer', value: '300' },
//   { type: 'decimal', value: '.' },
//   { type: 'fraction', value: '00' }
// ]

numberFormatter.formatToParts('3000')
// ====> 
// [
//   { type: 'currency', value: '€' },
//   { type: 'integer', value: '3' },
//   { type: 'group', value: ',' },
//   { type: 'integer', value: '000' },
//   { type: 'decimal', value: '.' },
//   { type: 'fraction', value: '00' }
// ]

numberFormatter.formatToParts('3000000')
// ====> 
// [
//   { type: 'currency', value: '€' },
//   { type: 'integer', value: '3' },
//   { type: 'group', value: ',' },
//   { type: 'integer', value: '000' },
//   { type: 'group', value: ',' },
//   { type: 'integer', value: '000' },
//   { type: 'decimal', value: '.' },
//   { type: 'fraction', value: '00' }
// ]

console.log(numberFormatter.format('300'))
// ====> '€300.00'

console.log(numberFormatter.format('3000'))
// ====> '€3,000.00'
 
console.log(numberFormatter.format('30000000'));
// ====> '€30,000,000.00'
 
console.log(numberFormatter.format('€30,000,000.00'));
// BAD ====> '€NAN'

// The problem with the above is that it does not allow the user to pass 
// an already formatted string
// 
// Also note: phones are different because everything has a specific location 
//
// User types 6036309814
// (603) 630-9814
// ^
//
// User types 6
// (6
// ^ 


const n1 = '6036309814'       
const n2 = '603-630-9814';    
const n3 = '(603)-630-9814';  
const n4 = '603';  
const n5 = '6036';  
const n6 = '60363';  

// Goal: formatPhone(n1) ---> '(603) 630-9814'
// Goal: formatPhone(n2) ---> '(603) 630-9814'
// Goal: formatPhone(n3) ---> '(603) 630-9814'
// Goal: formatPhone(n4) ---> '(603)'
// Goal: formatPhone(n5) ---> '(603) 6'
// Goal: formatPhone(n6) ---> '(603) 63'


// Given ( originally from google )
const pattern = "(\\d{3})(\\d{3})(\\d{4})"
const format = "($1) $2-$3";

// You may think its this easy !
// You are wrong :) 
// GOOD '6036309814'.replace(new RegExp(pattern), format)
// ====> '(603) 630-9814' 

// BAD '603'.replace(new RegExp(pattern), format)
// ====> '603'

// BAD '603630'.replace(new RegExp(pattern), format)
// ====> '603630'


// So you try this ( bastardized partial match regex )
// From https://stackoverflow.com/questions/42461651/partial-matching-a-string-against-a-regex
const pattern2 = "((?:\\d{3}|$))((?:\\d{3}|$))((?:\\d{4}|$))"
// BAD '603'.replace(new RegExp(pattern2), format) 
// ====> '(603) -'

// BAD '6036'.replace(new RegExp(pattern2), format)
// ====> '6(036) -'


// Or you try this ( another bastardized partial match regex )
const pattern3 = "(\\d{3}|$)(\\d{3}|$)(\\d{4}|$)"

// BAD '603'.replace(new RegExp(pattern3), format) 
// ====> '(603) -'

// BAD '6036'.replace(new RegExp(pattern3), format)
// ====> '6(036) -'


// But then you try this!!! ( you get closer but still see bad results )
const pattern4 = "(\\d{1,3}|$)(\\d{1,3}|$)(\\d{1,4}|$)"

// Basically turning "(\\d{3})(\\d{3})(\\d{4})" ---- into ----> "(\\d{1,3}|$)(\\d{1,3}|$)(\\d{1,4}|$)"

// TODO problem pattern "(\\d{2})(\\d{3})(\\d{2,3})"

// BAD '603'.replace(new RegExp(pattern4), format) 
// ====> '(603) -'

// BAD '6036'.replace(new RegExp(pattern4), format)
// ====> '603 6-'

// Try to Achieve our goal with all the above with no luck  :(
const formatPhone = (value, format, pattern) => {
  const clean = value.replace(/[^0-9]/g, '')
  return clean.replace(new RegExp(pattern), format)
}

console.log('----------------------------\n');

console.log(formatPhone(n1, format, pattern));
console.log(formatPhone(n2, format, pattern));
console.log(formatPhone(n3, format, pattern));
console.log(formatPhone(n4, format, pattern));
console.log(formatPhone(n5, format, pattern));
console.log(formatPhone(n6, format, pattern));

console.log('----------------------------\n');

console.log(formatPhone(n1, format, pattern2));
console.log(formatPhone(n2, format, pattern2));
console.log(formatPhone(n3, format, pattern2));
console.log(formatPhone(n4, format, pattern2));
console.log(formatPhone(n5, format, pattern2));
console.log(formatPhone(n6, format, pattern2));

console.log('----------------------------\n');

console.log(formatPhone(n1, format, pattern3));
console.log(formatPhone(n2, format, pattern3));
console.log(formatPhone(n3, format, pattern3));
console.log(formatPhone(n4, format, pattern3));
console.log(formatPhone(n5, format, pattern3));
console.log(formatPhone(n6, format, pattern3));

console.log('----------------------------\n');

console.log(formatPhone(n2, format, pattern4));
console.log(formatPhone(n1, format, pattern4));
console.log(formatPhone(n3, format, pattern4));
console.log(formatPhone(n4, format, pattern4));
console.log(formatPhone(n5, format, pattern4));
console.log(formatPhone(n6, format, pattern4));


// Then you consider the match function ... thinking 

// '6036'.match(pattern4)
// ====> [ '6036', '603', '6', '', index: 0, input: '6036', groups: undefined ]
 
 
// '603'.match(pattern4)
// ====> [ '603', '603', '', '', index: 0, input: '603', groups: undefined ]

// We can use match to build a custom replacer function 

// Remember at this point we were 
// 
// 1. Given from the input file
// const pattern = "(\\d{3})(\\d{3})(\\d{4})"
// const format = "($1) $2-$3";
//
// 2. We have turned the pattern "(\\d{3})(\\d{3})(\\d{4})" ---- into ----> "(\\d{1,3}|$)(\\d{1,3}|$)(\\d{1,4}|$)"
// 
// 3. Now we need to take "($1) $2-$3" and fill it in


// OR OR OR OR OR OR OOOORRRRRRRRRR we dont
//
// We have gotten to the point where we have to 
// 1. Manipulate the OG pattern "(\\d{3})(\\d{3})(\\d{4})"
// 2. Write a custom replace function that cant even use regex groupings
// 
// SO
// whats the point of doing it this way ? 
// 
// Instead just use format arrays lol 


// Goal fomratToParts(n1)
// ===> 
//
//  [
//    { type: '', value: '('},
//    { type: '', value },
//    {},
//  ]



// TO BE CLEAR
