import { Cryptr } from "../../../shared/Cryptr";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const SERVER_PREFIX = process.env.SERVER_PREFIX || '[Server]'

const getAllProvider = async (page: number, limit: number, orderNameBy: 'asc' | 'desc', filter: string): Promise<object | Error> => {
    try {
        const encdec = new Cryptr()
        const result = await prisma.password.findMany({
            where: {
                name: {
                    contains: filter
                },
            },
            orderBy: {
                name: orderNameBy
            },
            take: Number(limit),
            skip: (Number(page) - 1) * Number(limit)
        })

        result.forEach(password => {
            const decryptedData: string[][] = encdec.transformData({
                password: password.password,
                email: password.email,
                cpf: password.cpf,
                assEletronica: password.assinaturaEletronica,
                conta: password.conta,
            }, 'decrypt')

            password.password = decryptedData[0][1]
            password.email = decryptedData[1][1]
            password.cpf = decryptedData[2][1]
            password.assinaturaEletronica = decryptedData[3][1]
            password.conta = decryptedData[4][1]
        })
        return result
    } catch (error) {
        console.log(error);
        return new Error('Erro ao buscar registros no banco de dados')
    }
}

export { getAllProvider }