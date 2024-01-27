import { IPassword } from '../../models/Password';
import { Cryptr } from '../../../shared/Cryptr';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface IPasswordProps extends Omit<IPassword, 'id'> { }

const updateByIdProvider = async (password: IPasswordProps, passwordId: string)/*: Promise<object | Error>*/ => {
  console.log(passwordId);

  try {
    const encdec = new Cryptr();
    const encryptedData: string[][] = encdec.transformData({
      password: password.password,
      email: password.email,
      cpf: password.cpf,
      assEletronica: password.assinaturaEletronica,
      conta: password.conta,
    }, 'encrypt');

    const result = await prisma.password.update({
      where: {
        id: passwordId
      },
      data: {
        name: password.name,
        password: encryptedData[0][1],
        email: encryptedData[1][1],
        cpf: encryptedData[2][1],
        assinaturaEletronica: encryptedData[3][1],
        conta: encryptedData[4][1],
        weblink: password.weblink,
        description: password.description,
      },
    });
    return result;

  } catch (error) {
    console.log(error);
    return new Error('Erro ao atualizar registro no banco de dados');
  }
};

export { updateByIdProvider };