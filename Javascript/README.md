# Javascript Coding Solutions ⚜️

A collection of my solutions to Javascript coding challenges.

## Code Wars

###### 09/06/2020

```js
// Given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

function beggars(values, n) {
  let arr = [];
  if (n === 0) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    arr[i] = 0;
  }
  let x = 0;

  for (let i = 0; i < values.length; i++) {
    if (x === arr.length) {
      x = 0;
    }
    arr[x] += values[i];
    x += 1;
  }
  return arr;
}
console.log(beggars([1, 2, 3, 4, 5], 4));
```

###### 07/06/20

```js
// create a function that masks all but the last 4 characters of a given integer
function maskify(cc) {
  cc = cc.toString().split("").reverse();
  for (let i = 4; i < cc.length; i++) {
    cc[i] = cc[i].replace(/\w/, "#");
  }
  return cc.reverse().join("");
}

maskify(4242424242424242);
// => ############4242
```

```js
// Write a function that takes in a string of one or more words, and returns the same
// string, but with all five or more letter words reversed. Strings passed in will
// consist of only letters and spaces. Spaces will be
// included only when more than one word is present.

function spinWords(str) {
  str = str.split(" ").map((i) => {
    if (i.length >= 5) {
      return i.split("").reverse().join("");
    } else return i;
  });
  return str.join(" ");
}
spinWords("Just kidding there is still one more");
// => Just gniddik ereht is llits one more
```

```js
// decode a given string from morse code.
const MORSE_CODE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "|": " ",
};

decodeMorse = function (morseCode) {
  morseCode = morseCode.split("   ").map((word) => {
    return word.split(" ").map((letter) => {
      return MORSE_CODE[letter];
    });
  });
  morseCode = morseCode.map((i) => i.join("").toUpperCase()).join(" ");
  return morseCode;
};

decodeMorse(".... . -.--   .--- ..- -.. .");
// => HEY JUDE
```

###### 06/06/20

```js
// #An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is
// an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  str = str.toLowerCase().split("").sort();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      return false;
    }
  }
  return true;
}

isIsogram("Dermatoglyphics");
// => true
isIsogram("aba");
// => false
```

```js
// return an array of friends that have exactly 4 letters in their name.

function friend(friends) {
  arr = [];
  friends.map(function (i) {
    if (/[^0-9]\w/.test(i) && i.length === 4) {
      arr.push(i);
    }
  });
  return arr;
}
friend(["Ryan", "Kieran", "Mark"]);
// => [ 'Ryan', 'Mark' ]

friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);
// => [ 'Ryan' ]
```

```js
// find the unique element in a string of numbers.

function findUniq(arr) {
  let temp = arr[2];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] != arr[i]) {
      if (arr[i - 1] === temp) {
        return arr[i];
      } else return arr[i - 1];
    }
    temp = arr[i - 1];
  }
}

console.log(findUniq([0, 1, 0]));
//=> 1
console.log(findUniq([1, 1, 1, 2, 1, 1]));
//=> 2
console.log(findUniq([3, 10, 3, 3, 3]));
//=> 3
```

## Code Academy

###### 06/20

```js
// take a string and convert to camel case, but maintain the first letters capitalisation state
function toCamelCase(str) {
  if (str === "") {
    return str;
  }
  // clean string of all special characters, and split into words
  str = str.replace(/[^\s\w]/g, "").split(/[\W]|_/);

  // find the appropriate start index
  let i = 0;
  if (str[0][0] === str[0][0].toLowerCase()) {
    i = 1;
  }

  const capitalize = (word) => {
    word = word[0].toUpperCase() + word.slice(1);
    return word;
  };
  // actual logic
  for (i; i < str.length; i++) {
    str[i] = capitalize(str[i]);
  }
  return str.join("");
}
console.log(toCamelCase("I want to be a real, camel, case_sentence"));
// => IWantToBeARealCamelCaseSentence

console.log(toCamelCase("camel caseify me pleeease!!!!"));
// => camelCaseifyMePleeease
```

###### 06/20

```js
// find a needle in the hay stack
// example stack
// const stack = [
//  ['H', 'H', 'H'],
//  ['H', 'H', 'H'],
//  ['H', 'N', 'H']
// ]

function findNeedle(haystack) {
  let coord = [0, 0];
  haystack.forEach((child) => {
    // check each array in haystack for matching "N"
    if (child.indexOf("N") >= 0) {
      // when found return index on child arr and index of "N" in child
      coord[1] = child.indexOf("N");
      coord[0] = haystack.indexOf(child);
    }
  });
  return coord;
}
```

###### 06/20

```js
// Create a function called sumIfPossible.
// This function should take an array as input, and sum the values together if possible.
// If the variables are not the correct data type, skip over it, but keep track of how many skips have occurred

function sumIfPossible(arr) {
  let val = { skip: 0, sum: 0 };
  arr.forEach((i) => {
    // compare for correct data type
    if (typeof i == "number") {
      val.sum += i;
    } else {
      val.skip += 1;
    }
  });
  return val;
}

console.log(sumIfPossible([12, 43, 73, 2, 98, 4, -4, 56]));
// => { skip: 0, sum: 284 }
```

###### 06/20

```js
// There is a queue for the self-checkout tills at the supermarket.
// Your task is write a function to calculate the total time required for
// all the customers to check out!

function queueTime(customers, n) {
  arr = new Array(n).fill(0);
  customers.forEach((i) => {
    // find the queue with the smallest wait time
    let ind = arr.indexOf(Math.min(...arr));
    // add customer to queue
    arr[ind] += i;
  });
  // return longest queue time/total checkout time
  return Math.max(...arr);
}
console.log(queueTime([2, 2, 3, 3, 4, 4, 56, 3, 2, 1], 4));
// queues => [ 8, 7, 59, 6 ]
// total time => 59
```

###### 06/20

```js
// Create a function called sortByString, This function should take an array and a string as input,
// and sorts the words in the array by the string. You may receive more letters than you need.

function sortByString(array, string) {
  // split given string into array and iterate over
  let arr = string.split("").map((w) => {
    // find a word that matches current letter
    return array.filter((i) => {
      if (i[0] === w) {
        return i;
      }
    });
  });
  return arr.flat();
}

const arr = ["apple", "banana", "cherry", "date"];
const string = "dbca";
console.log(sortByString(arr, string));
// =>  ["date", "banana", "cherry", "apple"]
```
