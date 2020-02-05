function cariMean(arr) {
    // you can only write your code here!
    temp = 0
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i]
    }

    var mean = temp / arr.length
    return Math.round(mean)
    // kalo ngak boleh pake Math.round() kasih tau ya, 
    // biar saya cari pake lopping
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7


/* Di soal tertulis pembulatan ke atas , apakah seharus nya pek
Math.ceil(). Tapi jika pake Math.ceil() maka jawaban yang ke 4 hasil
nya adalah 3, karena saya menyesuaikan jawaban jadi pake Math.round
*/