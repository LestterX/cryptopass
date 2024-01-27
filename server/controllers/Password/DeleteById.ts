import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { providers } from '../../database/providers';

export const deleteById = async (req: Request, res: Response) => {
  if (!req.params.id) return res.status(StatusCodes.BAD_REQUEST).json({
    message: 'ID is required'
  });
  const { id } = req.params;
  const deletedPassword = await providers.passProviders.deleteByIdProvider(id);
  if (deletedPassword instanceof Error) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: deletedPassword.message
  });
  return res.status(StatusCodes.OK).send();
};