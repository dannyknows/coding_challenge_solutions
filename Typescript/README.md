# Typescript Coding Solutions 🦕

A collection of my solutions to Javascript coding challenges.

## Code Wars

###### 20/8/20

```ts
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str: string, ending: string): boolean {
  const stringIntersection: number = str.length - ending.length;
  return str.slice(stringIntersection) === ending;
}

console.log(solution("abcde", "cde")); // true
console.log(solution("abcde", "abc")); // false
```
