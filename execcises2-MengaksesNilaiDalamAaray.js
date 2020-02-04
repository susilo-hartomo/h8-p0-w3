//input "hello world!"
//output
// "!dlrow olleh"

var str = "hello world!"

function balikKata(params) {
    temp = ''
    for (let i = 0; i < params.length; i++) {
        temp += params[params.length - 1 - i]

    }
    return temp
}

console.log(balikKata(str));
