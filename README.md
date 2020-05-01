# Ruby Coding Solutions 🤖

A collection of my solutions to ruby coding challenges.

## Code Wars

###### 01/05/20

```ruby
# Given a string, replace every letter with its position in the alphabet.
# If anything in the text isn't a letter, ignore it and don't return it.
def alphabet_position(text)
  new = text.gsub(/\W|\d|_/, '').split('').map do |a|
    a.upcase.ord - 'A'.ord + 1
  end
  puts new.join(' ')
end

alphabet_position("The sunset sets at twelve o' clock.")
# => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

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
  puts text
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
  puts encrypted_text
end

encrypt('This is a test!', 2)
# => "s eT ashi tist!"

decrypt('hsi  etTi sats!', 1)
# => "This is a test!"
```

###### 25/04/2020

```ruby
# rearrange the digits to create the highest possible number.

def descending_order(n)
  puts n.digits.sort.reverse.join.to_i
end

descending_order(21441213034538452034977645)
# => 98776555444444333322211100
```

###### 25/04/2020

```ruby
# Convert accum("abcd") -> "A-Bb-Ccc-Dddd"

def accum(str)
  new_str = []
  str.split('').each_with_index do |l, i|
    new_str << (l * (i + 1)).capitalize
  end
  puts new_str.join('-')
end

accum('abcdefghijk')
# => "A-Bb-Ccc-Dddd-Eeeee-Ffffff-Ggggggg-Hhhhhhhh-Iiiiiiiii-Jjjjjjjjjj-Kkkkkkkkkkk"
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
  puts octal.reverse.join.to_i
end

octal_convertor(1276)
# base 8
# => 2374
```
