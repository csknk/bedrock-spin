var values = [], i = 0, duplicateCount = 0, val;
var crypto = require( 'crypto' );

function randomValueHex ( length ) {

    return crypto.randomBytes( Math.ceil(length * 3 / 4) )
    .toString( 'base64' )   // convert to base64 format
    //.toString( 'hex' )   // convert to base64 format
    .slice( 0, length )     // return required number of characters
    .replace( /\+/g, '0' )  // replace '+' with '0'
    .replace( /\//g, '0' ); // replace '/' with '0'

}

while ( i < 100000 ) {

  //val = randomValueHex( 64 );

  val = Math.random().toString(36).substring(7); // About 11,000 duplicates

  if ( true == values.includes(val) ) {

    duplicateCount++;

  } values.push(val);

  i++;

}

console.log("TOTAL DUPLICATES", duplicateCount);
