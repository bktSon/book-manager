import mongoose from 'mongoose';

let schema = new mongoose.Schema({
    name: 'string',
    age: 'number',
    email: 'string'
});

export default mongoose.model('users', schema);

