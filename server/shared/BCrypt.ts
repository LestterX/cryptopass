import { compare, hash } from 'bcrypt';

const SERVER_PREFIX = process.env.SERVER_PREFIX || '[Server]';

export class BCrypt {
  salt: number;
  constructor(salt: number = 10) {
    this.salt = salt;
  }
  async hashPassword(password: string): Promise<string> {
    console.log(`${SERVER_PREFIX} Hashing: ${password}...`);
    const hashedPassword = await hash(password, this.salt);
    console.log(`${SERVER_PREFIX} Hashing done`);

    return hashedPassword;
  }
  async compareHashedPassword(password: string, hashedPassword: string): Promise<boolean> {
    console.log(`${SERVER_PREFIX} Comparing: ${password}`);
    console.log(`${SERVER_PREFIX} With: ${hashedPassword}`);
    const isEqual = compare(password, hashedPassword);
    console.log(`${SERVER_PREFIX} Comparing done`);
    return isEqual;
  }
}