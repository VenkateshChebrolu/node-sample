const mongoose = require('mongoose');
//const Schema =  mongoose.Schema;
const {Schema} = mongoose; //deStructuring the above thing

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);