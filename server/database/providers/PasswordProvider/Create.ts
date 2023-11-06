import { IPassword } from "../../models/Password";
import { Cryptr } from "../../../shared/Cryptr";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

interface IPasswordProps extends Omit<IPassword, 'id'> { }

const createProvider = async (password: IPasswordProps)/*: Promise<object | Error>*/ => {    
    try {
        const encdec = new Cryptr()
        const encryptedPassword = encdec.encryptPassword(password.password)
        const result = await prisma.password.create({
            data: {
                name: password.name,
                password: encryptedPassword
            },
            select: {
                id: true
            }
        })
        console.log('encryptedPassword: ', encryptedPassword);
        return result.id
    } catch (error) {
        console.log(error);
        return new Error('Erro ao criar registro no banco de dados')
    }
}

export { createProvider }