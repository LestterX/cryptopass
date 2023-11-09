import { Router, Request, Response } from 'express';

const confRoutes = Router();
const routesPrefix = '/config';

confRoutes.get(`${routesPrefix}/`, (req: Request, res: Response) => {
  return res.status(200).json({ message: 'testConfigs' });
});

export { confRoutes };