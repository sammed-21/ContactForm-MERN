const mongoose = require('mongoose')
 const bcrypt  = require('bcryptjs')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
},
    email: {
        type: String,
        required: true,
        unique:true,
},
    password: {
        type: String,
        required:true,
},
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    pic: {
        type: String,
        required: true,
        default:"https://avatars.githubusercontent.com/u/71642244?v=4"
    }
})

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})
const User = mongoose.model("User", userSchema)

module.exports = User