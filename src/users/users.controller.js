export default new class UserController {
    findAll(req, res) {
        res.send('hello world');
    }
    
    create(req, res) {
        res.send('create success');
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
