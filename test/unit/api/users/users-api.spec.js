import request from 'supertest';
import assert from 'assert';
import app from '../../../../app';


describe('USERS', () => {
    describe('#get /users', () => {
        it('should be get all users success without err', (done) => {
            request(app)
                .get('/users')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(err => {
                    assert.equal(err, null);
                    done();
                });
        });
    });
    
    describe('#get /users/:id', () => {
        it('should be get users success without err by id', (done) => {
            request(app)
                .get('/users/5b3b3e91fb3a67255c43f4a2')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, response) => {
                    assert.equal(err, null);
                    assert.equal(response.body.code, 200);
                    if (! response.body.data) {
                        assert.equal(response.body.data, null);
                    }
                    done();
                });
        });
    });
});

