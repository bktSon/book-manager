import UserRepository from './users.repository';

export default new class UserController {
    
    create(req, res) {
        const user = req.body;
        UserRepository.create(user)
            .then(rs => res.sendJson(rs))
            .catch(err => res.send(err))
        ;
    }
    
    findAll(req, res) {
        UserRepository.findAll()
            .then(rs => res.sendJson(rs))
            .catch(err => res.send(err))
        ;
    }
    
    findById(req, res) {
        let userId = req.params.id;
        UserRepository.findById(userId)
            .then(rs => res.sendJson(rs))
            .catch(err => res.send(err))
        ;
    }
    
    update(req, res) {
        res.send('update success');
    }
    
    delete(req, res) {
        const id = req.params.id;
        if(id === '1') {
            // throw new ApError({code: 'E1022', message: 'Some thing broken'})
            throw ({code: 'E1022', message: 'Some thing broken'});
        }
        res.send('delete success');
    }
};
