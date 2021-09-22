let x = {
    type: 'hexadecimal',
    data: "abcd"
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

    if (array.length > 2) {
        const LSD = lowercasedGiven.match(LSDpattern)[0].replace('.', '')
        array.push(MSD, LSD)
    } else {
        array.push(MSD)
    }
    return array
}


function convertHexToDeci(arr) {
    // hexadecimal to decimal conversion
    
    // Most Significant Digits = MSD
    const MSD = arr[0].split('');
    let msdArr = [];
    MSD.forEach(char => {
        if (hexToDeci[char]) {
            msdArr.push(hexToDeci[char])
        } else {
            msdArr.push(Number(char))
        }
    })

    let msdExponents = [];
    for (let i=msdArr.length - 1; i >= 0; i--) {
        msdExponents.push(Math.pow(16, i))
    }

    msdArr.push(msdExponents)

    let finalMSDArr = [];
    for (let i=0; i < msdArr.length; i++) {
        for (let j=0; j < msdArr[i].length; j++) {
            finalMSDArr.push(msdArr[i][j] * msdArr[j])
        } 
    }

    let finalMSD = finalMSDArr.reduce((total, value) => total + value);

    // Least Significant Digits = LSD

    let finalLSD;
    if (arr.length > 1) {
        const LSD = arr[1].split('');

        let lsdArr = [];
        LSD.forEach(char => {
            if (hexToDeci[char]) {
                lsdArr.push(hexToDeci[char])
            } else {
                lsdArr.push(Number(char))
            }
        })
    
        let lsdExponents = [];
        for (let i=1; i <= lsdArr.length; i++) {
            lsdExponents.push(Math.pow(16, -i))
        }
    
        lsdArr.push(lsdExponents)
        
        let finalLSDArr = [];
        for (let i=0; i < lsdArr.length; i++) {
            for (let j=0; j < lsdArr[i].length; j++) {
                finalLSDArr.push(lsdArr[i][j] * lsdArr[j])
            }
        }

        finalLSD = finalLSDArr.reduce((total, value) => total + value)
    }
    

    if (arr.length > 1) {
        return finalMSD + finalLSD;
    } else {
        return finalMSD;
    }

}

console.log(convertHexToDeci(givenArray))