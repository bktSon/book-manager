import express from 'express';
import {userRouter} from '../../src/users/users.router';

export const router = express.Router();

router.use('/users', userRouter);

