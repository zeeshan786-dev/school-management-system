const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true

    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    role: {
        type: String,
        enum: ['admin', 'teacher', 'student'],
        default: 'admin'
    }
},{
    timestamps:true
});
module.exports = mongoose.model('User', userSchema);