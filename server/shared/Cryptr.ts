import cryptr from 'cryptr'

const SECRET_KEY = 'jkhd2398ansd35asd56[[wd31[~]2d1'
const SERVER_PREFIX = process.env.SERVER_PREFIX || '[Server]'

type IEncodingProps = "base64" | "latin1" | "hex"

export class Cryptr {
    pbkdf2Iterations?: number
    salt?: number
    encoding?: IEncodingProps
    constructor(salt: number = 96, pbkdf2Iterations: number = 150000, encoding: IEncodingProps = 'latin1') {
        this.salt = salt;
        this.pbkdf2Iterations = pbkdf2Iterations;
        this.encoding = encoding
    }
    _init() {
        console.log(`${SERVER_PREFIX} Creating instance...`);        
        const crypdec = new cryptr(SECRET_KEY, {
            encoding: this.encoding,
            pbkdf2Iterations: this.pbkdf2Iterations,
            saltLength: this.salt
        })
        return crypdec
    }
    encryptData(data: string): string {
        const crypdec = this._init()
        console.log(`${SERVER_PREFIX} Encrypting ${data}...`);     
        const encryptedData = crypdec.encrypt(data)
        console.log(`${SERVER_PREFIX} Done!`);        
        return encryptedData
    }
    decryptData(encryptedData: string): string {
        const crypdec = this._init()
        let decryptedData
        console.log(`${SERVER_PREFIX} Decrypting ${encryptedData}...`); 
        decryptedData = crypdec.decrypt(encryptedData)  
        console.log(`${SERVER_PREFIX} Done!`);
        return decryptedData
    }
}