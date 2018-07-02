'use strict';
import Promise from 'bluebird';
// import usersProvider from './src/users/users-repository.provider';

export default function (app) {
    // return Promise.resolve(usersProvider(app));
    return Promise.resolve(app);
}