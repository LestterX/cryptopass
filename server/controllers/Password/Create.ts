import { Request, Response } from 'express';
import { providers } from '../../database/providers';
import { IPassword } from '../../database/models/Password';
import { StatusCodes } from 'http-status-codes';

interface IPasswordProps extends Omit<IPassword, 'id'> { }

export const create = async (req: Request<unknown, unknown, IPasswordProps>, res: Response) => {
  console.log(req.body);
  if (!req.body.name || !req.body.password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Os campos NAME e PASSWORD são obrigatórios'
    });
  }
  const { name, password, email, cpf, assinaturaEletronica, conta, weblink, description } = req.body;
  const id = await providers.passProviders.createProvider({ name, password, email, cpf, assinaturaEletronica, conta, weblink, description });
  if (id instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: id.message
    });
  }
  return res.status(StatusCodes.CREATED).json({ id });
};