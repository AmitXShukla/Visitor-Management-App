const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    hostId: String,
    hostName: String,
    guestId: String,
    guestName: String,
    checkInDTTM: String,
    purpose: String
});

module.exports = mongoose.model('Register', registerSchema);