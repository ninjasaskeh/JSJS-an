// 3 biji statements
//1. initalization
//2. condition
//3. effect

// for(let i = 1; i <= 5; i++) {
//     console.log('data ke - i', i)
// }

// //jika kondisi salahh maka tidak akan dijalankan
// let x = 1
// while (x <= 5) {
//     console.log('data ke - x', x)
//     x++
// }

// //walaupun kondisi salahh maka akan dijalankan sekali -> y++
// let y = 1
// do {
//     console.log('data ke - y', y)
//     y++
// } while (y <= 5){

// }

const temanSaya = ['rangga', 'dilper', 'niko', 'cina', 'uton']

//menampilkan semua data dari array
for(let teman of temanSaya) {
    console.log(teman)
}

//menampilkan semua index  dari array
for(let teman in temanSaya) {
    console.log(teman)
}

//foreach biasa
temanSaya.forEach(teman => {
    console.log(teman)
});

//foreach nampilin index
temanSaya.forEach((teman, index) => {
    console.log(teman, index)
});

//make map(sama aja)
temanSaya.map((teman, index) => {
    console.log(teman, index)
});