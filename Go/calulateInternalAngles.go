package main

import "fmt"

// Angle calculates the internal angles of a polygon with n sides
func Angle(n int) int {
	return (n - 2) * 180
}

func main() {
	fmt.Println(Angle(3))
}
