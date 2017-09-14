module.exports = function multiply(first, second) {
  if( first.length < second.length ) {
      let tmp = second;
      second = first;
      first = tmp;
  }
  let num1Arr = first.split( '' );
  let num2Arr = second.split( '' );
  let result = [];
  let resultLength = num1Arr.length + num2Arr.length;
  for( i = 0; i < resultLength; i++ ) {
      result[ i ] = 0;
  }
  for( i = 0; i < num2Arr.length; i++ ) {
      for( k = 0; k < num1Arr.length; k++ ) {
          result[ 1 + i + k ] += num1Arr[ k ] * num2Arr[ i ];
      }
  }
  for( i = resultLength - 1; i > 0; i-- ) {
      if( result[ i ] >= 10 )
      {
          result[ i - 1 ] += Math.floor( result[ i ] / 10 );
          result[ i ] %= 10;
      }
  }
  if( result[ 0 ] === 0 ) {
    result[ 0 ] = undefined;
  }
  return result.join( '' );
}
