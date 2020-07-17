# Python Code Solutions 🐍

A collection of my solutions to Python coding challenges.

## Codewars

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
