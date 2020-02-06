function groupAnimals(animals) {
    // you can only write your code here!
    var kamus = 'abcdefghijklmnopqrstuvwxzy'
    kelompokHewan = []
    for (let i = 0; i < kamus.length; i++) {
        temp = []
        for (let j = 0; j < animals.length; j++) {
            if (kamus[i] == animals[j][0]) {
                temp.push(animals[j])
            }
        }

        if (temp.length !== 0) {
            kelompokHewan.push(temp)
        }

    }
    return kelompokHewan
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]