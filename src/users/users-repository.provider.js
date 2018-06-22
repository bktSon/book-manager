let UsersRepository = require('./users.repository');

module.export = function (app) {
    let usersRepository = new UsersRepository(app.get('connection'));
    app.set('userRepository', usersRepository);
    resolve(app)
};