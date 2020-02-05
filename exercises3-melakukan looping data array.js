//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

//output
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun

// CARA PERTAMA
function dataHandling(params) {

    for (let i = 0; i < params.length; i++) {
        temp = ['Nomor ID: ', 'Nama Lengkap : ', 'TTL : ', 'Hobi : ']
        k = 0
        for (let j = 0; j < temp.length; j++) {
            if (j !== 2) {
                temp[j] += params[i][k]
                console.log(temp[j]);
                k++
            } else {
                temp[j] += `${params[i][k]} ${params[i][k + 1]}`
                console.log(temp[j]);
                k += 2
            }
        }
        console.log('')
    }

}

console.log('==========CARA KESATU==========');
dataHandling(input);


// CARA KEDUA
function dataHandling1(params) {
    for (let i = 0; i < params.length; i++) {

        for (let j = 0; j < 4; j++) {
            switch (j) {
                case 0:
                    console.log(`Nomor ID : ${params[i][j]}`);
                    break;
                case 1:
                    console.log(`Nama Lengkap : ${params[i][j]}`);
                    break;
                case 2:
                    console.log(`TTL : ${params[i][j]} ${params[i][j + 1]}`);
                    break;
                case 3:
                    console.log(`Hobi : ${params[i][j + 1]}`);
                    break;
            }
        }
        console.log('')
    }
}

console.log('==========CARA KEDUA==========');
dataHandling1(input);