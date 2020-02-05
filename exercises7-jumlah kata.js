//CARA 1
function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    return kalimat.split(' ').length
}

// TEST CASES
console.log('======== CARA 1 ===========');
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5


//CARA 2
function hitungJumlahKata1(kalimat) {
    // you can only write your code here!
    temp = 0
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] == ' ') {
            temp++
        }
    }
    temp += 1
    return temp
}

// TEST CASES
// TEST CASES CARA 2
console.log('======== CARA 2 ===========');
console.log(hitungJumlahKata1('I have a dream')); // 4
console.log(hitungJumlahKata1('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata1('A song to sing')); // 4
console.log(hitungJumlahKata1('I')); // 1
console.log(hitungJumlahKata1('I believe I can code')); // 5