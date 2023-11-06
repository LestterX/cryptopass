import { Cryptr } from "../../../shared/Cryptr";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const SERVER_PREFIX = process.env.SERVER_PREFIX || '[Server]'

const getAllProvider = async (page: number, limit: number, filter: string): Promise<object| Error> => {    
    try {
        const encdec = new Cryptr()
        const result = await prisma.password.findMany({
            where: {
                name: {
                    contains: filter
                }
            },
            take: Number(limit),
            skip: (Number(page) - 1) * Number(limit)
        })
        result.forEach(password => {
            const decryptedPassword = encdec.decryptPassword(password.password)
            password.password = decryptedPassword
            console.log(`${SERVER_PREFIX} Password: ${decryptedPassword}`)      
        })
        return result
    } catch (error) {
        console.log(error);
        return new Error('Erro ao buscar registros no banco de dados')
    }
}

export { getAllProvider }