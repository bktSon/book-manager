import express from 'express';
import UserController from './users.controller';
import middleWare from '../../shared/middleware/params.not.valid.middleware';
export const userRouter = express.Router();

userRouter.route('/')
    .get(UserController.findAll)
    .post(UserController.create)
;

userRouter.route('/:id')
    .put(middleWare, UserController.update)
    .delete(middleWare, UserController.delete)
;


