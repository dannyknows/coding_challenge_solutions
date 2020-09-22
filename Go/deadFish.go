// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.

// Parse("iiisdoso") == []int{8, 64}

package main

import (
	"fmt"
	"strings"
)

// Parse return the results of a dead fishes instructed actions
func Parse(data string) []int {
	actions := strings.Split(data, "")
	count := 0
	result := []int{}
	for i := 0; i < len(actions); i++ {
		a := actions[i]
		switch {
		case a == "i":
			count++
		case a == "d":
			count--
		case a == "s":
			count = count * count
		case a == "o":
			result = append(result, count)
		default:
			continue
		}
	}
	return result
}

func main() {
	test := "iiisdoso"
	fmt.Println(Parse(test))
}
