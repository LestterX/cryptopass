import { Request, Response } from "express"

export const getAll = async (req: Request, res: Response) => {
    return res.send('test')
}