import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { providers } from '../../database/providers';

export const updateById = async (req: Request, res: Response) => {
  if (!req.params.id) return res.status(StatusCodes.BAD_REQUEST).json({
    message: 'ID is required'
  });
  const { id } = req.params;
  const { name, password, email, cpf, assinaturaEletronica, conta, weblink, description } = req.body;
  const passwordId = await providers.passProviders.updateByIdProvider({ name, password, email, cpf, assinaturaEletronica, conta, weblink, description }, id);
  if (passwordId instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: passwordId.message
    });
  }
  return res.status(StatusCodes.CREATED).json({ id });
};