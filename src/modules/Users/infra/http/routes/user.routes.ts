import { Router } from 'express';
import { Joi, celebrate, Segments } from 'celebrate';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();
usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

export default usersRouter;
