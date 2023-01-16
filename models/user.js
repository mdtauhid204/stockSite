const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200,
        unique: true,
    },
    password: { type: String, required: true, minlength: 3, maxlength: 1024 }
})

module.exports = mongoose.model("User", UserSchema);