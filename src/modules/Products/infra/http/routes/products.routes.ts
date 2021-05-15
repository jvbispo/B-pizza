import { Router } from 'express';
import { Joi, Segments, celebrate } from 'celebrate';
import ProfileController from '@modules/Users/infra/http/controllers/ProfileController';
import authMiddlware from '@modules/Users/infra/http/middlwares/authMiddlware';

const profileController = new ProfileController();
const profileRouter = Router();
profileRouter.put(
  '/',
  authMiddlware,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      quantity: Joi.number(),
      price: Joi.number(),
      picture: Joi.string(),
    },
  }),
  profileController.update,
);

profileRouter.get('/avatar', authMiddlware, profileController.show);

export default profileRouter;
