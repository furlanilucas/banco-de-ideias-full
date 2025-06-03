import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { userRoutes } from './user.routes';
import { ideaRoutes } from './idea.routes';
import { commentRoutes } from './comment.routes';
import { categoryRoutes } from './category.routes';
import { tagRoutes } from './tag.routes';

export const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/users', userRoutes);
routes.use('/ideas', ideaRoutes);
routes.use('/comments', commentRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/tags', tagRoutes); 