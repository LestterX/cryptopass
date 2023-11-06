import { Request, Response } from "express";
import { providers } from '../../database/providers'
import { IPassword } from "../../database/models/Password";
import { StatusCodes } from "http-status-codes";

interface IPasswordProps extends Omit<IPassword, 'id'> { }

export const create = async (req: Request<{}, {}, IPasswordProps>, res: Response) => {
    console.log(req.body);
    if (!req.body.name || !req.body.password) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Forneca os campos NAME e PASSWORD'
        })
    }
    const { name, password } = req.body
    const id = await providers.passProviders.createProvider({ name, password})
    if (id instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: id.message
        })
    }
    return res.status(StatusCodes.CREATED).json({ id })
}