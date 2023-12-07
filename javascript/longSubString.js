function lengthOfLongestSubstring(s) {
  if (s.length === 0) return 0;
  let i = 0;
  let longest = 1;
  while (i + longest < s.length){
    //try extending length, if it succeeds update longest
    const substringChars = (new Set(s.slice(i, i+longest+1))).size;
    if (substringChars === longest + 1){
      longest++
    } 
    //if it fails move forward index one
    else{
      i++
    }
  }
  return longest
}

if (require.main === module) {

// add your own tests in here
console.log("Expecting: 3");
console.log("=>", lengthOfLongestSubstring("abcabcbb"));

}

module.exports = lengthOfLongestSubstring

// Please add your pseudocode to this file
// And a written explanation of your solution