# &#64;joepuzzo/phone

A library that formats and validates phone numbers. 

## `formatPhone` Example usage

See [./src/formatPhone.test.js](./src/formatPhone.test.js) for more examples

```js
import { formatPhone } 'intl-phone';

formatPhone('2015550123', 'US')
// ==> "(201) 555-0123"

```

## `validatePhone` Example usage

See [./src/validatePhone.test.js](./src/validatePhone.test.js) for more examples

```js
import { validatePhone } 'intl-phone';

validatePhone('1015550123', 'US')
// ==> false

```

---

## Future Work

Eventually we should add options that allow user to chose and control the format.
1. `international` vs `domestic` 
2. Adding `+1`

---

# Background

## Problem Statement

* input formatting ( making it look correct )
* input validation ( checking that the number is valid )

## Standards 

[E.164](https://en.wikipedia.org/wiki/E.164)
## Terminology


### Trunk Prefix 

A trunk prefix is a digit sequence to be dialed before a telephone number to initiate a call for the purpose of selecting an appropriate telecommunications circuit by which the call is to be routed.

IDD is a trunk prefix
NDD is a trunk prefix

————————————————————————————————————————

### IDD ( International Direct Dialing ) 

Layman's Terms: How do I get out of my country !

Also known as: `Exit Prefix`, `International Dialing Code`, and `International Call Prefix`

Example: I want to get Out of the USA and into Australia: 

```
011 61 7 3333 3333 
^^^
```

So the USA’s IDD is 011

Note: this can be replaced by `+` symbol when formatting a phone number to match E.164

```
011 61 7 3333 3333 ------> + 61 7 3333 3333
```

————————————————————————————————————————

### Country Code 
Layman's Terms: How do I get into a country !

Example: I want to get Into Australia from the USA: 

```
011 61 7 3333 3333 
    ^^ 
```

————————————————————————————————————————

### NDD ( National Direct Dialing )

Layman’s Terms: Extra numbers when dialing within a country

Background: in a number of countries, local dialing may require the addition of a '0' in front of the subscriber number. With E.164 formatting, this '0' must usually be removed.

Example: 

```
Dial Within Australia: 07 3333 3333
					   ^

Dial Into Australia ( from US )	: 011 61 7 3333 3333

							^^^NO 0 in front of 7^^^

E.164 Format: + 61 7 3333 3333

```

---

### Different formats

Why are phone numbers so hard to format?

The following examples of how people will type phone numbers in england.

#### International

| Number     | Formatted        | Type                                               |
| ---------- | ---------------- | -------------------------------------------------- |
| 1212345678 | +44 121 234 5678 | landline in birmingham                             |
| 2012345678 | +44 20 1234 5678 | landline in london                                 |
| 1525123456 | +44 1525 123456  | landline in Leighton Buzzard                       |
| 1525123456 | +44 1525 123 456 | landline in Leighton Buzzard formatted differently |
| 7400123456 | +44 7400 123456  | mobile                                             |
| 7400123456 | +44 7400 123 456 | mobile formatted differently                       |

#### Domestic

| Number     | Formatted     | Type                                               |
| ---------- | ------------- | -------------------------------------------------- |
| 1212345678 | 0121 234 5678 | landline in birmingham                             |
| 2012345678 | 020 1234 5678 | landline in london                                 |
| 1525123456 | 01525 123456  | landline in Leighton Buzzard                       |
| 1525123456 | 01525 123 456 | landline in Leighton Buzzard formatted differently |
| 7400123456 | 07400 123456  | mobile                                             |
| 7400123456 | 07400 123 456 | mobile formatted differently                       |

Note: This library currently only supports the `international` ( E.164 ) formats.

---

## Storage

Using the above, we break a phone number down into its components.

Given `011 61 07 3333 3333` you can get:

```json
{
	"iddPrefix": "011",
	"countryCode": "61",
	"nddPrefix": "0",
	"areaCode": "7",
	"number": "33333333",
}
```

However whats required to be stored is: 

```json
{
	"country": "AU",
	"areaCode": "7",
	"number": "33333333",
}
```

The rest can be derived from the above

Also acceptable storage

```json
{
	"country": "AU",
	"countryCode": "61",
	"number": "733333333",
}
```

```json
{
	"country": "AU",
	"number": "733333333",
}
```

--- 

## Developing

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

```
npm install
```

## Running the tests

```
npm run test
```

## Building the code

```
npm run build
```

## Design Thought Process

Read [this](https://gist.github.com/joepuzzo/a7934a96f9424a3973a3d1e9bb65a68a) for a code thought process.

## Adding/Updating countries

This lib is based on googles libphonenumber. To generate our configs, we eat googles meta.json. We have added a script in the `runnable` directory that can be used as follows: 

```bash
npm run generate:meta /../../libphonenumber-js/metadata.json
```

Were the arg is your path to googles metadata.json file

## Typescript

The author of this package hates Typescript, however, realizes many people use it and therefore has added a index.d.ts file. This file is generated from the JSdocs found in every file. See the tsconfig for more details :)

Also check out this [link](https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html)

## Generating json.js files

**NOTE Below is actually not done for now but I kept it in the readme in case this becomes a problem.**

Due to a known issue with browsers importing json files. This package must also contain the `.js` variants of the raw json files. 

Therefore, not unlike googles lib-phonenumber library, we need to ship this along with the `.json.js` files.