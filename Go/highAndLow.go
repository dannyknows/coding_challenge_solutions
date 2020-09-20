// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

package main

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

// HighAndLow returns the highest and lowest numbers from a
// given string of int32 numbers
func HighAndLow(in string) string {
	strArr := strings.Split(in, " ")
	var numArr []int
	for i := 0; i < len(strArr); i++ {
		str, err := strconv.Atoi(strArr[i])
		if err != nil {
			fmt.Println(err)
		}
		numArr = append(numArr, str)
	}
	sort.Ints(numArr)
	fmt.Printf(fmt.Sprintf("%v %v", numArr[len(strArr)-1], numArr[0]))
	return ""
	// return fmt.Sprintf("%v %v", numArr[len(strArr)-1], numArr[0])
}

func main() {
	test := "8 3 -5 42 -1 0 0 -9 4 7 4 -4"
	HighAndLow(test)
}
