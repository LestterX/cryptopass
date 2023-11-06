import { IPassword } from "../../models/Password";
import { Cryptr } from "../../../shared/Cryptr";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

interface IPasswordProps extends Omit<IPassword, 'id'> { }

const createProvider = async (password: IPasswordProps)/*: Promise<object | Error>*/ => {
    try {
        const encdec = new Cryptr()
        const encryptedPassword = encdec.encryptData(password.password)
        let encryptedEmail = null
        let encryptedCpf = null
        let encryptedAssinaturaEletronica = null
        let encryptedConta = null
        if (password.email) { encryptedEmail = encdec.encryptData(password.email) }
        if (password.cpf) { encryptedCpf = encdec.encryptData(password.cpf) }
        if (password.assinaturaEletronica) { encryptedAssinaturaEletronica = encdec.encryptData(password.assinaturaEletronica) }
        if (password.conta) { encryptedConta = encdec.encryptData(password.conta) }
        const result = await prisma.password.create({
            data: {
                name: password.name,
                password: encryptedPassword,
                email: encryptedEmail,
                cpf: encryptedCpf,
                assinaturaEletronica: encryptedAssinaturaEletronica,
                conta: encryptedConta,
                weblink: password.weblink,
                description: password.description,
            },
            select: {
                id: true,
            },
        })
        console.log('encryptedPassword: ', encryptedPassword);
        return result.id
    } catch (error) {
        console.log(error);
        return new Error('Erro ao criar registro no banco de dados')
    }
}

export { createProvider }