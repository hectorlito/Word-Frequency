const sentence = 'I Love love lamp ';

const findWordFrequencies = (str) => {
  const wordCount = {};
  const toArray =str.split(' ');
  toArray.forEach( ( word )=> {
    if (!wordCount[word.toLowerCase()]) {
      wordCount[word.toLowerCase()] = 1;
    } else {
      wordCount[word]++
    }
  });
  return wordCount
}

const findHighestFrequency = (wordsObj)=>{
  let value = 0;
  let word;
  for (let theWord in wordsObj){
    if (wordsObj[theWord] > value){
      value = wordsObj[theWord];
      word = theWord;
    }
  }
  return { [word] : value }
}



findWordFrequencies( sentence );

// findHighestFrequency(findWordFrequencies( sentence ));
