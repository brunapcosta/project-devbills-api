import { Router } from 'express';

import { baseRoutes } from './base.route';
import { categoriesRoutes } from './category.route';

export const routes = Router();

routes.use('/', baseRoutes);
routes.use('/categories', categoriesRoutes);