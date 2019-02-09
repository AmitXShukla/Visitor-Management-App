const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hostSchema = new Schema({
    inputName: String,
    inputAddress: String,
    inputEmail: String,
    inputPhone: String,
    inputComments: String
});

module.exports = mongoose.model('Host', hostSchema);