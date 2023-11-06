import { PrismaClient } from "@prisma/client"
import { IPassword } from "../../models/Password";
const prisma = new PrismaClient()


const createProvider = (password: IPassword)/*: Promise<object | Error>*/ => {
    try {
        const result = prisma.password.create({
            data: {
                name: password.name,
                password: password.password
            },
            select: {
                id: true
            }
        })
        console.log(result);
        return result
    } catch (error) {
        console.log(error);
        return new Error('Erro ao criar registro no banco de dados')
    }
}

export { createProvider }