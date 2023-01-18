// Question 1
const isUpperCase = (str) => {
  return str === str.toUpperCase()
};

// Question 2
const removeVowels = (arr) => {
  const regex = /[aeiou]/gi
  return arr.map(word => word = word.replace(regex,""))
};

// Question 3
const wordCap = () => {

};

// Question 4
const swapCase = () => {

};

// Question 5
const staggeredCase = () => {

};

// Question 6
const wordLengths = () => {

};

// Question 7
const searchWord = () => {

};


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
