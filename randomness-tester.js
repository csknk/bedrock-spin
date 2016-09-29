var values = {}, i = 0, duplicateCount = 0, val;
var crypto = require( 'crypto' );

function randomValueHex ( length ) {

    return crypto.randomBytes( Math.ceil(length * 3 / 4) )
    .toString( 'base64' )   // convert to base64 format
    //.toString( 'hex' )   // convert to base64 format
    .slice( 0, length )     // return required number of characters
    .replace( /\+/g, '0' )  // replace '+' with '0'
    .replace( /\//g, '0' ); // replace '/' with '0'

}

while ( i < 1000000 ) {

  val = randomValueHex( 64 ); // Zero duplicates

  //val = Math.random().toString(36).substring(7); // About 110,255 duplicates using node v0.12.2, zero duplicates using node v6.2.2

  if ( values[val] ) {

    duplicateCount++;

  } values[val] = 1;

  i++;

}

//console.log( values );


console.log("TOTAL DUPLICATES", duplicateCount);
