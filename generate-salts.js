/**
 * Simple Javascript that generates WordPress salts
 *
 * Note that the Javascript version affects uniqueness for some functions - for
 * example, `Math.random().toString(36).substring(7);` generates a lot of
 * duplicates when using old versions of Node, but over 1M iterations shows
 * no duplication in Node v6.2.2. We're not using this method anyway, so this
 * note is for academic interest only.
 *
 * (c) David Egan 2016
 * MIT License
 * @see https://blog.tompawlak.org/generate-random-values-nodejs-javascript
 * @see http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript (v. useful)
 * @see https://roots.io/salts.html
 * @TODO potential alphabet: `var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]/|`,.?+-=:;';`
 */
var crypto = require( 'crypto' );

// Return a random string based on an input length
function randomValueHex ( length ) {

    return crypto.randomBytes( Math.ceil(length * 3 / 4) )
    .toString( 'base64' )   // convert to base64 format (could use 'hex')
    .slice( 0, length )     // return required number of characters
    .replace( /\+/g, '0' )  // replace '+' with '0'
    .replace( /\//g, '0' ); // replace '/' with '0'

}

var values_array = [
  ['AUTH_KEY'],
  ['SECURE_AUTH_KEY'],
  ['LOGGED_IN_KEY'],
  ['NONCE_KEY'],
  ['AUTH_SALT'],
  ['SECURE_AUTH_SALT'],
  ['LOGGED_IN_SALT'],
  ['NONCE_SALT']
];

// Loop through the array of keys and add values
for (var i = 0, len = values_array.length; i < len; i++) {

  values_array[i].push( randomValueHex(64) );

}

// Generate output in .env format
for (var i = 0, len = values_array.length; i < len; i++) {

  console.log( values_array[i][0] + "=" + "'" + values_array[i][1] + "'");

}
