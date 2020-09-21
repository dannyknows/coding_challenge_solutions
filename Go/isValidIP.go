// Valid inputs:

// 1.2.3.4
// 123.45.67.89

// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
// IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Leading zeros are considered invalid

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func isValidIp(ip string) bool {
	ipChunks := strings.Split(ip, ".")
	if len(ipChunks) < 4 {
		return false
	}

	for i := 0; i < len(ipChunks); i++ {
		strChu := ipChunks[i]
		// Convert Chunk to number, if err invalid IP
		numChu, err := strconv.ParseInt(ipChunks[i], 10, 64)
		if err != nil {
			return false
		}

		switch {
		// if leading with 0, false
		case string(strChu[0]) == "0" && len(strChu) > 1:
			return false
		// if not  0-225 int, false
		case numChu >= 256 || numChu < 0:
			return false
		}
	}

	return true
}

func main() {
	fmt.Println("123.45.67.89 is valid")
	fmt.Println(isValidIp("123.45.67.89"))
	fmt.Println("123.045.067.089 isn't valid")
	fmt.Println(isValidIp("123.045.067.089"))
}
