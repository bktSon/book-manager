import mongoose from 'mongoose';
import assert from 'assert';
import config from '../../../config/index';

const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: { type: String, required: true },
    age: {type: Number, required: true}
});

const Person = mongoose.model('persons', testSchema);

describe('CRUD CONNECTION MONGODB', () => {
    before((done) => {
        mongoose.connect(config.mongo.url, config.mongo.options);
        
        const db = mongoose.connection;
        
        db.on('error', console.error.bind(console, 'connection error'));
        
        db.once('open', () => {
            done();
        });
    });
    
    describe('#save()', () => {
        it('should be save without err', (done) => {
            let mike = Person({
                name: 'Michael jackson',
                age: 24
            });
            
            mike.save(done);
        });
        
        it('should be save with err if incorrect data format', (done) => {
            let wrongPerson = Person({
                notName: 'Albert Einstein',
                notAge: 22
            });
            
            wrongPerson.save(err => {
                assert.notEqual(err, null, 'Expect err not equal null');
                if(err) {return done();}
            });
        });
        
        it('should be save with err if missing key', (done) => {
            let missingAge = Person({
                name: 'Newton'
            });
            
            missingAge.save(err => {
                assert.notEqual(err, null);
                done();
            });
        });
    });
    
    describe('#find()', () => {
        it('Find by name without err', async () => {
            let persons = await Person.find({age: 24});
            assert.equal(persons.length, 1);
        });
    });
    
    after((done) => {
        mongoose.connection.collections['persons'].drop(function (err) {
            assert.equal(err, null);
            done();
        });
    });
});