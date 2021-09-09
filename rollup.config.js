// import json from '@rollup/plugin-json';
import * as path from 'path';

export default {
  input: [
    `src/lib/index.js`, 
    'src/lib/formatPhone.js', 
    'src/lib/phoneFormatter.js', 
    'src/lib/validatePhone.js', 
    'src/lib/getFormats.js',
    'src/lib/getExample.js',
    'src/lib/getPatterns.js',
    'src/lib/getCountryCode.js',
    'src/lib/getSupportedCountries.js',
  ],
  output: [
    {
      dir: `dist/cjs`,
      format: 'cjs'
    },
    {
      dir: `dist/esm`,
      format: 'esm'
    }
  ],
  external: [ path.resolve('src/data/formats.json'), path.resolve('src/data/patterns.json'), path.resolve('src/data/examples.json'), path.resolve('src/data/supportedCountries.json') ],
  external: [ path.resolve('src/data/formats.json.js'), path.resolve('src/data/patterns.json.js'), path.resolve('src/data/examples.json.js'), path.resolve('src/data/supportedCountries.json.js') ]
  // plugins: [json()]
}
