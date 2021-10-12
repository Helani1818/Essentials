const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name!"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Please Enter Your Email!"],
        trim: true,
        unique: true
    },

    password: {
        type: String,
        required: [true, "Please Enter Your Password!"],
    },

    role: {
        type: Number,
        default: 0 // 0= user, 1= admin
    },

    avatar: {
        type: String,
        default: "https://res.cloudinary.com/du50qjpqy/image/upload/v1634001130/avatar/profilepic_ttbvqi.jpg"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)