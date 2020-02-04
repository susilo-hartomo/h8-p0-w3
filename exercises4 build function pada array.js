// MENGGUNAKAN BUILD FUNCTION BERIKUT INI
// join, split, slice, splice, dan sort.

//splice (indek star, banyak item di delete, item ditambahkan (itm1, itm2, ...))
//split(tandan yang memisahkan,bayak item yang mau diambil)
//join(menggabungkan item array, tanda pemisah)

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


    var pengaturanTanggal = []
    for (let j = 0; j < bulan.length; j++) {
        pengaturanTanggal.push(Number(bulan[j]))
    }

    console.log('')
    console.log(pengaturanTanggal.sort());
    console.log('');

    console.log('');
    console.log(bulan.join('-'))
    console.log('')

    console.log('');
    console.log(params[1].slice(0, 15))
    console.log('')

}

dataHandling2(input);



