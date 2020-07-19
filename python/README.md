# Python Code Solutions 🐍

A collection of my solutions to Python coding challenges.

## Codewars

###### 19/07/20

```python 
# Return true or false if number is square or not, excluding 
# negative numbers

import math

## python 3.6 😕
def is_square(n):
    return n >= 0 and round(math.sqrt(n)) ** 2 == n

# python 3.8 😎
def is_square(n):
    return n >= 0 and math.isqrt(n) ** 2 == n

print(is_square(-100))
#=> false
print(is_square(45678948576789))
#=> false
```

```python
# Write a function that takes a string and return a new string
# with all vowels removed.

import re

def disemvowel(string):
    return re.sub(r"[aeiouAEIOU]", "", string)

print(disemvowel("This website is for losers LOL!"))
# => Ths wbst s fr lsrs LL!
```

```python
# Return the middle most letting in a given string, if even return both middle
# characters
import math

def get_middle(s):
    mid = len(s)
    if mid % 2 == 0:
        ind = math.floor(mid/2)
        return s[ind-1] + s[ind]
    else:
        return s[math.floor(mid/2)]

print(get_middle("middle"))
# => dd
print(get_middle("testing"))
# => t
```

###### 18/07/20

```python
# count all vowels in a given string, ignoring y
import re

def get_count(input_str):
    return len(re.findall(r"[aeiou]", input_str, re.IGNORECASE))

print(get_count("abracadabra"))
# => 5

print(get_count("o a kak ushakov lil vo kashu kakao"))
# => 13
```

###### 17/07/20

```python
#Implement a function called likes, it must take an array input,
# containing the names of people who like an item.

def likes(names):
    string = " this"
    if len(names) == 0:
        return 'no one likes this'
    elif len(names) == 1:
        return names[0] + " likes" + string
    elif len(names) == 2:
        return " and ".join(names) + " like" + string
    elif len(names) == 3:
        return ", ".join(names[0:2:]) + ' and %s' % names[2] + ' like' + string
    elif len(names) > 3:
        return ", ".join(names[0:2:]) + ' and %s others' % (len(names) - 2) + ' like' + string


print(likes(["Jacob", "Alex"]))
# => Jacob and Alex like this

print(likes(["Max", "John", "Mark"]))
# => Max, John and Mark like this

print(likes(["Alex", "Jacob", "Mark", "Max"]))
# => Alex, Jacob and 2 others like this
```
