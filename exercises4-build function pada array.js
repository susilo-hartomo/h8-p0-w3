// MENGGUNAKAN BUILD FUNCTION BERIKUT INI
// join, split, slice, splice, dan sort.

//splice (indek star, banyak item di delete, item ditambahkan (itm1, itm2, ...))
//split(tandan yang memisahkan,bayak item yang mau diambil)
//join(menggabungkan item array, tanda pemisah)
//mengutkan(besar,kesil) jika number dalam string berdasrkan angka paling depan
//slice(mengambil string dari-n, sampai-m)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(params) {
    params.splice(1, 2, 'Roman Alamsyah Elsyarawi', 'Provisi Bandar Lampung')
    params.splice(4, 1, 'Pria', 'SMA Internasional Metro')
    console.log('splice mengganti atau menambahkan komponen')
    console.log(params)
    console.log('')

    var bulan = params[3].split('/')
    switch (bulan[1]) {
        case '01':
            console.log('Januari');

            break;
        case '02':
            console.log('Februari');

            break;
        case '03':
            console.log('Maret');

            break;
        case '04':
            console.log('April');
            'April'
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log();
            'Juni'
            break;
        case '07':
            console.log('Juli');

            break;
        case '08':
            console.log('Agustus');

            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember')
            break;
        default:
            'Bulan dari angka 1 sampai 12'
            break;
    }

    console.log('sort mengurutkan nilai dari angka terbesar')
    console.log(bulan.sort((a, b) => b - a));
    console.log('');

    var waktu = params[3].split('/')
    console.log('');
    console.log('join dengan tanda hubung \'-\' ');
    console.log(waktu.join('-'))
    console.log('')

    console.log('slice 15 huruf pertama');
    console.log(params[1].slice(0, 15))
    console.log('')
}

dataHandling2(input);