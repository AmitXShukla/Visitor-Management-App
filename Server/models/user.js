const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    inputEmail: String,
    inputPassword: String
});

module.exports = mongoose.model('User', userSchema);