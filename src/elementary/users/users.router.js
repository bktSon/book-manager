import express from 'express';
import {userCreateSchemaInvalid} from '../../shared/middleware/user/user-body-invalid.middleware';
import UserController from './users.controller';
export const userRouter = express.Router();


userRouter.route('/')
    .post(userCreateSchemaInvalid, UserController.create)
    .get(UserController.findAll)
;

userRouter.route('/:id')
    .put(UserController.update)
    .delete(UserController.delete)
;
