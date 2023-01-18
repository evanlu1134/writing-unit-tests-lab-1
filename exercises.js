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
const wordCap = (str) => {
  return str.split(" ").map(word => word[0].toUpperCase() + word.toLowerCase().slice(1,word.length)).join(" ")
};

// Question 4
const swapCase = (str) => {
  return str.split("").map(word => word === word.toUpperCase() ? word = word.toLowerCase() : word = word.toUpperCase()).join("")
};

// Question 5
const staggeredCase = (str) => {
let run = true
let result = ""
const nonAlphabet = /[^A-Z\s]/gi
for(let i = 0; i < str.length;i++){
  if(str[i] === " " || str[i].match(nonAlphabet)) {
    result += str[i]
    continue
  }
  run ? (result += str[i].toUpperCase(), run = false) : (result += str[i].toLowerCase(), run = true)
}
  return result
};

// Question 6
const wordLengths = (str) => {
  return str ? str.split(" ").map(word => {
    return word =`${word} ${word.length}`
  }) : []
};

// Question 7
const searchWord = (str,text) => {
const regexStr = new RegExp(`(${str})([^a-z0-9])?$`, "gi");
return text.split(" ").filter(char => char.match(regexStr)).length
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
