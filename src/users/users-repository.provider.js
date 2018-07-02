import UsersRepository from './users.repository';

export default function (app) {
    let usersRepository = new UsersRepository(app.get('connection'));
    app.set('userRepository', usersRepository);
}