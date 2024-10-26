import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        trim: true,
unique: 'Email already exists',
match: [/.+\@.+\..+/, 'Please fill a valid email address'],
required: 'Email is required'
    },
    password: {
        type: String,
        required: true
    },
    created: {
type: Date,
default: Date.now
    },
    updated: {
type: Date,
default: Date.now
},

})
//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('User', UserSchema);
