import { Router, Request, Response } from "express"

const passRoutes = Router()
const routesPrefix = '/password'

passRoutes.get(`${routesPrefix}/`, (req: Request, res: Response) => {
    return res.status(200).json({message: 'testPasswords'})
})

export { passRoutes }