import mongoose from 'mongoose';

const UserSCheme = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    surname:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    passwordHash:{
        type: String,
        required: true,
    },
    avatarUrl: String,
}, {
    timestamps: true,
});

export default mongoose.model('User', UserSCheme);