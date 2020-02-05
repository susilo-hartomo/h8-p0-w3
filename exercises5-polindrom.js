function palindrome(kata) {
    // you can only write your code here!
    temp = ''
    for (let i = 0; i < kata.length; i++) {
        temp += kata[kata.length - i - 1]
    }
    return kata === temp
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false



