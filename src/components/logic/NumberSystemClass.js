class NumberSystem {
    constructor(type, data) {
        this.type = type;
        this.data = data;
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
            return `provide a valid ${this.type} number`
        }
    }
}

class ConvertToDecimal extends NumberSystem{
    constructor(type, data) {
        super(type, data);
    }
}

const binary = new NumberSystem('binary', '10010010.0011');
console.log(binary.getMsdAndLsd())