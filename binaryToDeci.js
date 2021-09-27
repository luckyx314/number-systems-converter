x = {
    type: "binary",
    data: '101011110011.10101101',
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

console.log(x.msdAndLsdArray())