package main

import (
	"bytes"
	"fmt"
)

func printChar(char rune) rune {
	fmt.Println(char)
	return char
}

func main() {
	str := []byte{"... --- me", "sasda"}
	bytes.Map(printChar, str)
}
