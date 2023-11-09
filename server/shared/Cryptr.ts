import cryptr from 'cryptr';

const SECRET_KEY = 'jkhd2398ansd35asd56[[wd31[~]2d1';
const SERVER_PREFIX = process.env.SERVER_PREFIX || '[Server]';

type IEncodingProps = 'base64' | 'latin1' | 'hex';
type TMode = 'encrypt' | 'decrypt';

export class Cryptr {
  pbkdf2Iterations?: number;
  salt?: number;
  encoding?: IEncodingProps;
  constructor(salt: number = 48, pbkdf2Iterations: number = 75000, encoding: IEncodingProps = 'latin1') {
    this.salt = salt;
    this.pbkdf2Iterations = pbkdf2Iterations;
    this.encoding = encoding;
  }
  _init() {
    console.log(`${SERVER_PREFIX} Creating Cryptr instance...`);
    const crypdec = new cryptr(SECRET_KEY, {
      encoding: this.encoding,
      pbkdf2Iterations: this.pbkdf2Iterations,
      saltLength: this.salt
    });
    return crypdec;
  }
  transformData(data: object, mode: TMode): string[][] {
    const crypdec = this._init();
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);
    const newData: Array<string[]> = []; //É O MESMO QUE string[][] APARENTEMENTE

    for (let i = 0; i < dataKeys.length; i++) {
      const key = dataKeys[i];
      if (mode === 'encrypt') {
        console.log(`Encrypting ${key}: ${dataValues[i]}`);
        const encryptedValue = crypdec.encrypt(dataValues[i]);
        console.log('Done!');
        newData.push([key, encryptedValue]);
      } else if (mode === 'decrypt') {
        console.log(`Decrypting ${key}: ${dataValues[i]}`);
        const decryptedValue = crypdec.decrypt(dataValues[i]);
        console.log('Done!');
        newData.push([key, decryptedValue]);
      }
    }

    return newData;
  }
}