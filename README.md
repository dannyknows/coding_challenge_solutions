# Ruby Coding Solutions 🤖

A collection of my solutions to ruby coding challenges.

## Code Wars

###### 01/05/20

```ruby
# Given a string, replace every letter with its position in the alphabet.
# If anything in the text isn't a letter, ignore it and don't return it.
def alphabet_position(text)
  new = text.gsub(/\W|\d|_/,'').split('').map do |a|
   p a
  #  a.upcase.ord - 'A'.ord + 1
  end
  new.join(' ')
end

puts alphabet_position("The sunset sets at twelve o' clock.")
```

###### 25/04/20

```ruby
# Take every 2nd character from a string and concat them with the remaining as new String. N times.

# "This is a test!", 1 -> "[hsi  ] + [et Ti sats!]" -> hsi  etTi sats!
# "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

def encrypt(text, n)
  n.times do
    fir = ''
    sec = ''
    text.split('').map!.with_index {|i, a|
      a % 2 == 0 ? sec << i : fir << i
    }
    text = fir + sec
  end
  text
end

def decrypt(encrypted_text, n)
  n.times do
    str = []
    len = encrypted_text.length / 2
    fir = encrypted_text.slice(len..-1)
    sec = encrypted_text.slice(0..len - 1)
    (len + 1).times do |i|
      str << fir[i]
      str << sec[i]
    end
    encrypted_text = str.join
  end
  encrypted_text
end

p encrypt('This is a test!', 2)
p decrypt('hsi  etTi sats!', 1)
```

###### 25/04/2020

```ruby
# rearrange the digits to create the highest possible number.

def descending_order(n)
  n.digits.sort.reverse.join.to_i
end

puts descending_order(21445)
```

###### 25/04/2020

```ruby
# Convert accum("abcd") -> "A-Bb-Ccc-Dddd"

def accum(str)
  new_str = []
  p str = str.split('')
  str.each_with_index do |l, i|
    p new_str << (l * (i + 1)).capitalize
  end
  new_str.join('-')
end

p accum('abcd')
```

## Coder Academy

###### 25/04/2020

```ruby
# Convert from base 10 (decimal) to base 8 (octal)

def octal_convertor(num)
  octal = []
  while num >= 8
    octal << num % 8
    num /= 8
  end
  octal << num
  octal.reverse.join.to_i
end

p octal_convertor(1276)
```
