// const yourarray = []


// yourarray[0] = 'd'
// yourarray[1] = 'e'
// yourarray[2] = 'f'
// console.log(yourarray)

// const ourarray = new Array()
// ourarray[0] = 'x'
// ourarray[2] = 'z'
// ourarray[1] = 'y'
// console.log(ourarray)

// const myarray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// const c = myarray.includes('c')

// if(c) {
    
//     const posisi = myarray.indexOf('c')
//     const ibefore = posisi - 1
//     const iafter = posisi + 1
//     const before = myarray[ibefore]
//     const after = myarray[iafter]

//     console.log(posisi)
    
//     console.log(before)
//     console.log(after)

//     const fisrt = myarray.shift()
//     console.log(fisrt)

//     const last = myarray[myarray.length - 1] //myarray.pop()
//     console.log(last)

// } else {
//     "saya ga tau"
// }

// const myarray = []

// myarray['apel'] = 'apel'
// myarray['naga'] = 'naga'

// console.log(myarray)

// const myarray = ['a', 'b', 'c', 'd', 'e', 'f'] //original
// // const newMyArray = [...myarray] // kw
// // const newMyArray = myarray.slice() // kw
// // const newMyArray = Array.from(myarray) // kw
// const newMyArray = JSON.parse(JSON.stringify(myarray)) // kw

// newMyArray[0] = 'x'

// console.log({myarray})
// console.log({newMyArray})

// const myarray = [
//     2,
//     'apel',
//     {
//         tomato: function() {
//         console.log('array')
//         },
//     },
//     ['kopi', 'susu'],
// ]

// myarray[2].tomato() //manggil function dalam array

// const myarray = ['a', 'b', 'c']
// const yourarray = ['d', 'e', 'f']

// const ourarray = myarray.concat(yourarray)

// // for (list of ourarray) console.log(list) // nampilin smua value nya
// // for (list in ourarray) console.log(list) // nampilin index
// ourarray.map((value, index) => console.log(index, value)) // nampilin smua nya 

const datas = [
    {
        nama: 'arip',
        kerja: 'nganggur',
        usia: 20
    },
    {
        nama: 'fulan',
        kerja: 'main ml',
        usia: 24
    },
    {
        nama: 'panjul',
        kerja: 'artis',
        usia: 38
    },
    {
        nama: 'gugun',
        kerja: 'ODGJ',
        usia: 40
    },
]

// datas.sort((a, b) => a.usia - b.usia).map((values) => console.log(values)) // k -> b
// datas.sort((a, b) => b.usia - a.usia).map((values) => console.log(values)) // b -> k
// datas.filter((x) => x.usia >= 24).map((values) => console.log(values)) // filter
datas
    .sort((a, b) => b.usia - a.usia)
    .filter((x) => x.usia >= 24)
    .map((values) => console.log(values)) // smua