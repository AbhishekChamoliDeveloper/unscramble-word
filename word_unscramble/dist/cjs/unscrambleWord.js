"use strict";
exports.__esModule = true;
var wordlist_english_1 = require("wordlist-english");
var words = wordlist_english_1["english"];
function unscramble(word) {
  word = word.toLowerCase();
  var matches = [];
  var sortedWord = word.split("").sort().join("");
  words.forEach(function (word) {
    if (sortedWord.length == word.length) {
      var sortedFoundWord = word.split("").sort().join("");
      if (sortedWord == sortedFoundWord) {
        matches.push(word);
      }
    }
  });
  if (matches.length == 0) matches = ["No results found."];
  return matches;
}
module.exports = unscramble;
//# sourceMappingURL=unscrambleWord.js.map
