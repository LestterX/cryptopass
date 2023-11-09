import { Request, Response } from "express"
import { passProviders } from "../../database/providers/PasswordProvider"
import { StatusCodes } from 'http-status-codes'

interface IQueryProps {
    page?: number,
    limit?: number,
    orderNameBy?: 'asc' | 'desc',
    filter?: string
}

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    console.log(req.query)
    const result = await passProviders.getAllProvider(req.query.page || 1, req.query.limit || 7, req.query.orderNameBy || 'asc',req.query.filter || '',)
    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: result.message
        })
    }
    return res.status(StatusCodes.OK).json({
        result
    })
}