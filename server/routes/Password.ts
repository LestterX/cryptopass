import { Router } from 'express';
import { passwordController } from '../controllers/Password';

const passRoutes = Router();
const routesPrefix = '/password';

passRoutes.post(`${routesPrefix}/`, passwordController.create);
passRoutes.get(`${routesPrefix}/`, passwordController.getAll);
passRoutes.delete(`${routesPrefix}/:id`, passwordController.deleteById);

export { passRoutes };