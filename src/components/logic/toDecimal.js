class NumberSystem {
    constructor(numberSystem, data) {
        this.numberSystem = numberSystem;
        this.data = data.toString();
    }

    getnumberSystem() {
        return this.numberSystem;
    }

    getData() {
        return this.data;
    }

    getMsdAndLsd() {
        if (this.data) {
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
        } else {
            return `provide a valid ${this.numberSystem} number`
        }
    }

    ifLsd() {
        if (this.data) {
            const lsdPattern = /[.]\w+/
            const given = this.data;
            return lsdPattern.test(given)
        }
    }

    toDecimal(base) {
            let msd;
            let lsd;
            const checkFraction = typeof this.getMsdAndLsd()[1] === 'object';
            const notHex = this.numberSystem !== 'hexadecimal';

            if (checkFraction) {
                if (notHex) {
                    msd = this.getMsdAndLsd()[0].map(num => Number(num));
                    lsd = this.getMsdAndLsd()[1].map(num => Number(num));
                } else {
                    msd = this.getHexMsdAndLsd()[0].map(num => num);
                    lsd = this.getHexMsdAndLsd()[1].map(num => num);
                }
            } else if (this.ifLsd()) {
                if (notHex) {
                    lsd = this.getMsdAndLsd().map(num => Number(num));
                } else {
                    lsd = this.getHexMsdAndLsd().map(num => num);
                }
            } else {
                if (notHex) {
                    msd = this.getMsdAndLsd().map(num => Number(num));
                } else {
                    msd = this.getHexMsdAndLsd().map(num => num);
                }
            }

            let finalMsd
            if (msd) {
                finalMsd = [...msd].map((num, index) => {
                    return num * Math.pow(base, (Math.abs(index - (msd.length - 1))))
                }).reduce((total, value) => total + value);
            }


            let finalLsd;
            if (checkFraction || this.ifLsd()) {
                finalLsd = [...lsd].map((num,index) => {
                    return num * Math.pow(base, -(index + 1))
                }).reduce((total, value) => total + value);

                if (checkFraction) {
                    return finalMsd + finalLsd;
                } else if (this.ifLsd()) {
                    return finalLsd;
                }
            } else {
                return finalMsd;
            }
    }
}


// To decimal
class BinaryToDecimal extends NumberSystem{
    constructor(numberSystem, data) {
        super(numberSystem, data);
    }

    validate() {
        const data = this.getData();
        const pattern = /[2-9|a-z]+/g

        if (!pattern.test(data)) {
            return true;
        } else {
            return false
        }

    }

    convertToDecimal() {
        if (this.validate()) {
            return this.toDecimal(2)
        } else {
            return `Not a valid ${this.numberSystem} number.`
        }
    }
}



class OctalToDecimal extends NumberSystem{
    constructor(numberSystem, data) {
        super(numberSystem, data);
        
    }

    validate() {
        const data = this.getData();
        const pattern = /[8-9|a-z]+/g

        if (!pattern.test(data)) {
            return true;
        } else {
            return false
        }

    }

    convertToDecimal() {
        if (this.validate()) {
            return this.toDecimal(8)
        } else {
            return `Not a valid ${this.numberSystem} number.`
        }
    }
}



class HexToDecimal extends NumberSystem {
    constructor(numberSystem, data) {
        super(numberSystem, data)
        this.hexTable = {
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15
        }
    }

    validate() {
        const pattern = /[0-9|a-z]/g;
        const data = this.data;

        if (pattern.test(data)) {
            return true;
        } else {
            return false
        }

    }

    getHexMsdAndLsd() {
        if (this.data) {
            const given = this.getData().toLowerCase();
            const msdPattern = /\w+/
            const lsdPattern = /[.]\w+/ 
            
            let convertedMsd = [];
            const msd = given.match(msdPattern)[0].split('').forEach(char => {
                if(this.hexTable[char]) {
                    convertedMsd.push(Number(this.hexTable[char]))
                } else {
                    convertedMsd.push(Number(char))
                }
            });


            if (given.indexOf('.') > 0) {
                let convertedLsd = [];
                const lsd = given.match(lsdPattern)[0].replace('.','').split('').forEach(char => {
                    if (this.hexTable[char]) {
                        convertedLsd.push(Number(this.hexTable[char]))
                        
                    } else {
                        convertedLsd.push(Number(char))
                    }
                });
                return [convertedMsd, convertedLsd]
            } else {
                return convertedMsd;
            }
        } else {
            return `provide a valid ${this.numberSystem} number`
        }
    }
    
    convertToDecimal() {
        if (this.validate()) {
            return this.toDecimal(16)
        } else {
            return `Not a valid ${this.numberSystem} number.`
        }
    }

}



export {
    NumberSystem,
    BinaryToDecimal,
    HexToDecimal,
    OctalToDecimal
}