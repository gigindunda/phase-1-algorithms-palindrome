
function reverse(word) {
    // Write your algorithm here
    // 'bake' => 'ekab'
    // 'raw' => 'war'
    // const wordArray = word.split("");
    // const reversedWordArray = wordArray.reverse();
    // const reversedWord = reversedWordArray.join("");
    // return reversedWord;
    return word.split("").reverse().join("");
}
function isPalindrome(word) {
    const reversedWord = reverse(word);
    return word === reversedWord;
}
/* 
  Add your pseudocode here
   if the word is the same as the word in reverse, I should return true.
  
  reverse the input string
  if the input is the same as the reversed input
    return true
  else
    return false
*/
/*
  Add written explanation of your solution here
the word input should have same word on reverse for a tuthy to appear
else, the falsey will appear.
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
    console.log("");
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
    console.log("");
    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));
    console.log("");
    console.log("Expecting: true");
    console.log("=>", isPalindrome(""));
}
module.exports = isPalindrome;
