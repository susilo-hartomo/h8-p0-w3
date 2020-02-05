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

    console.log(temp);

    temp1 = ''
    for (let j = 0; j < temp.length; j++) {
        for (let k = 0; k < temp.length; k++) {
            if (temp[j] > temp[k]) {
                temp1 += temp[j]
                // console.log(temp1);
                temp[j] = temp[k]
                // console.log(temp[j]);
                temp[k] = temp1
                // console.log(temp[k]);
                temp1 = ''
                // console.log('Tahap ke: ', j, k);
                // console.log(temp);
                // console.log('============');
                // console.log(' ');
            }
        }

    }

    // console.log(temp);
    return temp[0]
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99