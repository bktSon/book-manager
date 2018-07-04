import User from './user';

export default new class UserRepository {
    constructor() {
        this.connection = User;
    }
    
    /**
     * @param user
     * @return {user}
     */
    create(user) {
        return this.connection.create(user);
    }
    
    /**
     * Get all user
     * @return {Query|Promise|*}
     */
    findAll() {
        return this.connection.find({});
    }
}