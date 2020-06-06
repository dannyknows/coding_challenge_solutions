# Javascript Coding Solutions ⚜️

A collection of my solutions to Javascript coding challenges.

## Code Wars

###### 06/06/20

```js
// #An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

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

## Code Academy

```text
Refer to the Javascript dir for files with jest tests!
challenges/tests written by educators
```
