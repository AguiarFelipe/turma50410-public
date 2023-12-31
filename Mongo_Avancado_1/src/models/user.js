const mongoose = require('mongoose');

const userCollection = 'users';

const userSchema = mongoose.Schema({
    first_name: {
        type:String,
        index:true
    },
    last_name: String,
    email: String,
    gender: String
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;