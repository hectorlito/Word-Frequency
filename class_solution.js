const findWordFrequencies = str => {
  //lowercase it
  
  //take a String and split it into an array by ' '
  const stringToArray = str.toLowerCase().split( ' ' );
  // console.log(stringToArray)
  //make an Object
  const words = {};
  //iterate over our array
  for ( let i = 0; i < stringToArray.length; i++){
      words[stringToArray[i]] = (words[stringToArray[i]] || 0) + 1;
      // two possible things
      // create a key with a value of 1
      // OR
      // add to the key
  }
  //each new word is going to be a key in the Object
  //each key will start with a value of 1
  //if the word is repeated it will add to the value 
  console.log ( words );
}


findWordFrequencies( "i love Love lamp" );
