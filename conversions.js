let x = {
    type: 'hexadecimal',
    data: "abcd.FA"
};


const hexToDeci = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
}

let givenArray = separateMSDandLSD(x);


function separateMSDandLSD(given) {
    const array = [];
    const lowercasedGiven = given.data.toLowerCase();
    const MSDpattern = /\w+/i;
    const LSDpattern = /[.]\w+/i

    const MSD = lowercasedGiven.match(MSDpattern)[0]
    const LSD = lowercasedGiven.match(LSDpattern)[0].replace('.', '')

    array.push(MSD, LSD)

    return array
}


function convertHexToDeci(arr) {
    const MSD = arr[0].split('');
    const LSD = arr[1].split('');

    let msdArr = [];
    let lsdArr = [];

    MSD.forEach(char => {
        if (hexToDeci[char]) {
            msdArr.push(hexToDeci[char])
        } else {
            msdArr.push(Number(char))
        }
    })


    LSD.forEach(char => {
        if (hexToDeci[char]) {
            lsdArr.push(hexToDeci[char])
        } else {
            lsdArr.push(Number(char))
        }
    })

    console.log(msdArr)
    console.log(lsdArr)

    
}

convertHexToDeci(givenArray)



    // lowercasedGiven.split('').forEach(char => {
    //     if (!hexToDeci[char]) {
    //         MSD.push(Number(char))
    //     } else if (hexToDeci[char]) {
    //         MSD.push(hexToDeci[char])
    //     }
    // })

    // let exponents = []

    // for (let i = MSD.length - 1; i >= 0; i--) {
    //     // console.log('exponent', Math.pow(16, i))
    //     exponents.push(Math.pow(16, i))
    // }

    // MSD.push(exponents)

    // let final = [];
    // for (let i=0; i < MSD.length; i++) {
    //     for (let j = 0; j < MSD[i].length; j++) {
    //         final.push(MSD[i][j] * MSD[j])
    //     }
    // }

    // console.log(final.reduce((total, value) => total + value))