function pasanganTerbesar(num) {
    // you can only write your code here!
    temp = []
    var stringAngka = String(num)
    // console.log(stringAngka);
    // console.log(stringAngka[0]);
    // console.log(stringAngka[1]);
    // console.log(temp.push(stringAngka[0] + stringAngka[1]));
    // console.log(temp);
    for (let i = 0; i < stringAngka.length - 1; i++) {
        temp.push(stringAngka[i] + stringAngka[i + 1])
    }
    temp.sort((a, b) => (b - a))
    return temp[0]
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99