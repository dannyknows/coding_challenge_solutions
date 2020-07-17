# Python Code Solutions 🐍

A collection of my solutions to Python coding challenges.

## Codewars

###### 17/07/20

```python
#Implement a function likes :: [String] -> String, which must take in input
#array, containing the names of people who like an item.
#It must return the display text as shown in the examples:

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

likes(["Alex", "Jacob", "Mark", "Max"])
likes(["Max", "John", "Mark"])
likes(["Jacob", "Alex"])
likes(["Peter"])
``` 
