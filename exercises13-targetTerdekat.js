function targetTerdekat(arr) {
    // you can only write your code here!
    indexO = 0
    indexX = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'o') {
            indexO += i
        } else if (arr[i] == 'x')
            indexX.push(i)
    }

    // console.log('indexO');
    // console.log(indexO);
    // console.log('=======');
    // console.log('indexX');
    // console.log(indexX);

    if (indexX.length !== 0) {
        jarakOX = Math.abs(indexX[0] - indexO)
        // console.log('jarakOX');
        // console.log(jarakOX);

        for (let j = 1; j < indexX.length; j++) {
            var cariJarak = Math.abs(indexX[j] - indexO)
            // console.log('=============');
            // console.log('cariJarak');
            // console.log(cariJarak);

            if (cariJarak < jarakOX) {
                jarakOX = cariJarak
            }
        }
        return `Jarak ox terdekat : ${jarakOX}`
    } else {
        return 'Jarak ox terdekat : 0'
    }

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2