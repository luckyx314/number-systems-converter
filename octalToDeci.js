const x = {
    type: "octal",
    data: '304.2',
    msdAndLsdArray: function () {
        const given = this.data;
        const msdPattern = /\w+/
        const lsdPattern = /[.]\w+/
        
        const MSD = given.match(msdPattern)[0].split('');

        if (given.indexOf('.') > 0) {
            const LSD = given.match(lsdPattern)[0].replace('.','').split('');
            return [MSD, LSD]
        } else {
            return MSD;
        }
    } 
}

// 1x8^2 + 2x8^1 + 7x8^0 + 4x8^-1 + 2x8^-2 + 3x8^-3

function convertFromOctalToDecimal(x) {
    if (typeof(x) !== 'object') {
        console.log('Error: You need the array of combined MSD and LSD. This is a method.')
        return undefined;
    }

    // convert MSD
    let MSD;
    if (typeof(x[0]) === "object") {
        MSD = x[0]
    } else {
        MSD = x;
    }
    const finalMSD = [...MSD].map(num => {
        return num * Math.pow(8, [...MSD].reverse().indexOf(num))
    })
    .reduce((a,b) => a + b);

    // convert LSD
    const LSD = x[1];
    if (typeof(x[0]) === "object") {
        const finalLSD = LSD.map(num => {
                return num * Math.pow(8, [...LSD].reverse().indexOf(num) - [...LSD].length)
            })
            .reduce((a,b) => a+b);

        console.log(finalMSD + finalLSD)
    } else {
        console.log(finalMSD)
    }
}

convertFromOctalToDecimal(x.msdAndLsdArray())
// console.log(x.msdAndLsdArray())
