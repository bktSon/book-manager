import express from 'express';
import request from 'supertest';
import assert from 'assert';
import responseFormatMiddleWare from '../../../src/shared/middleware/app/response-format.middleware';
let app = express();

app.use(responseFormatMiddleWare);

app.get('/sendJson1', (req, res) => {
    res.sendJson({});
});

app.get('/sendJson2', (req, res) => {
    res.sendJson({name: 'leonardo da vinci', age: 24});
});

app.get('/sendError1', (req, res) => {
    res.sendError({});
});

app.get('/sendError2', (req, res) => {
    res.sendError({code: 'IRIS'});
});

app.get('/sendError3', (req, res) => {
    res.sendError({code: 'IRIS', message: 'fault'});
});

describe('RESPONSE MIDDLEWARE', () => {
    describe('#sendJson()', () => {
        it('expect if api success and response data equal {} must be response null', (done) => {
            request(app)
                .get('/sendJson1')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, response) => {
                    assert.equal(err, null);
                    assert.deepEqual(response.body.code, 200);
                    assert.deepEqual(response.body.data, null);
                    done();
                });
        });
    
        it('expect response data success', (done) => {
            request(app)
                .get('/sendJson2')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, response) => {
                    assert.equal(err, null);
                    assert.deepEqual(response.body.code, 200);
                    assert.notEqual(response.body.data, null, 'response data not equal null');
                    assert.deepEqual(response.body.data, {name: 'leonardo da vinci', age: 24});
                    done();
                });
        });
    });
    
    describe('#sendError()', () => {
        it('expect if exist err but not exist err code and message', (done) => {
            request(app)
                .get('/sendError1')
                .expect('Content-Type', /json/)
                .end((err, response) => {
                    assert.equal(err, null);
                    assert.deepEqual(response.body.code, 'ERR9999');
                    assert.equal(response.body.message, 'message not defined');
                    done();
                });
        });
    
        it('expect if exist err code must response err code', (done) => {
            request(app)
                .get('/sendError2')
                .expect('Content-Type', /json/)
                .end((err, response) => {
                    assert.equal(err, null);
                    assert.deepEqual(response.body.code, 'IRIS');
                    assert.equal(response.body.message, 'message not defined');
                    done();
                });
        });
    
        it('expect if exist message must return message', (done) => {
            request(app)
                .get('/sendError3')
                .expect('Content-Type', /json/)
                .end((err, response) => {
                    assert.equal(err, null);
                    assert.equal(response.body.message, 'fault');
                    done();
                });
        });
    
        it('expect if exist message and code must return code, message', (done) => {
            request(app)
                .get('/sendError3')
                .expect('Content-Type', /json/)
                .end((err, response) => {
                    assert.equal(err, null);
                    assert.equal(response.body.code, 'IRIS');
                    assert.equal(response.body.message, 'fault');
                    done();
                });
        });
    });
});

