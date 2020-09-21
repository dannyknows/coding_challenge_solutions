package main

import (
	"fmt"
	"sort"
)

// TwoOldestAges returns an array of the two oldest ages
func TwoOldestAges(ages []int) [2]int {
	sort.Ints(ages)
	return [2]int{ages[len(ages)-2], ages[len(ages)-1]}
}

func main() {
	ages := []int{1, 20, 45, 32, 86, 62}
	fmt.Println(TwoOldestAges(ages))
}
