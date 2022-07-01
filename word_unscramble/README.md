
# unscramble_word

# unscramble_word

unscramble_word is a library which is used to convert jumbled word or scrambled word or meaningless word in to a proper meaningfull word.

I know its went up from your brian. So here is a another explaination like in kindergarden teacher gives us a jumbled word and we have to rearrange the word and then convert it to a meaningfull word. Got It ?

Example:-

1. sdmiuo -> sodium.
2. gdo -> god or dog.
3. motainun -> mountain.
4. chkenic -> chicken.
5. wpoer -> proper.

## Installation

```bash
  npm i unscramble_word
```

## For ES Module

```bash
 import unscrambleWord from "unscramble_word";
```

## For Node JS

```bash
 const unscrambleWord = require("unscramble_word");
```

## Documentation

```bash
 import unscrambleWord from "unscramble_word"; // For ES MODULE
                      or
 const unscrambleWord  = require("unscramble_word");  // For Node JS


 const scrambledWord = "muntonian";

 const unscrambledWord = unscrambleWord(scrambledWord);

 console.log(unscrambledWord);

```

## Output

```bash
 ['mountain']

```

## Authors

- [@Abhishek Chamoli](https://github.com/AbhishekChamoliDeveloper)
