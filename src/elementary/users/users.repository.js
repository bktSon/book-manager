import User from './user';

export default new class UserRepository {
    constructor() {
        // this.connection = User;
        this.models = User;
    }
    
    /**
     * @param user
     * @return {user}
     */
    create(user) {
        return this.models.create(user);
    }
    
    /**
     * Get all user
     * @return {Query|Promise|*}
     */
    findAll() {
        return this.models.find({});
    }
    /**
     *
     * @param id
     * @return {*}
     */
    findById(id) {
        return this.models.findById(id);
    }
}