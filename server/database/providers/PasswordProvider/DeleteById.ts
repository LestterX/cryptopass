import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const deleteByIdProvider = async (passwordId: string)/*: Promise<object | Error>*/ => {
  try {
    await prisma.password.delete({
      where: {
        id: passwordId
      }
    });
  } catch (error) {
    console.log(error);
    return new Error('Erro ao remover registro do banco de dados');
  }
};

export { deleteByIdProvider };