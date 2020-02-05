function angkaPalindrome(num) {
    // you can only write your code here!
    function polindrom(num) {
        temp = ''
        var numStr = String(num)
        console.log("==============");

        for (let i = 0; i < numStr.length; i++) {
            temp += numStr[numStr.length - i - 1]
        }
        console.log('ini num', num)
        console.log('revrs', temp)
        return temp
    }

    var check = true
    while (check) {
        num++
        if (polindrom(num) == num) {
            check = false
        }
    }
    return num
}




// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001



