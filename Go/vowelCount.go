package main

import (
	"fmt"
	"regexp"
)

// GetCount returns a count of all vowels in a given string
func GetCount(str string) (count int) {
	vowels := regexp.MustCompile("a|e|i|o|u")
	countArr := vowels.FindAllStringIndex(str, -1)
	count = len(countArr)
	return count
}

func main() {
	greeting := "hello there"
	fmt.Println(GetCount(greeting))
}
