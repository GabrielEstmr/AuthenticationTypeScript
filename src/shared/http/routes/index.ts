import { Router } from 'express';

import sessionsRouter from '@modules/users/routes/sessions.routes';
import profileRouter from '@modules/users/routes/profile.routes';
import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profile', profileRouter);

export default routes;