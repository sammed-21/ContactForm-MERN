
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
    const { name, email, password, pic } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Use 'hashedPassword' for storing the hashed password
   
    const user = await User.create({
        name,
        email,
        password: hashedPassword, // Use the hashed password here
        pic
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token:generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("Error occurred!");
    }
    res.json({
        name, email
    });
         } catch (error) {
        console.log(error.message);
    }

}

 
const authUser = async (req, res) => {
 
    try {
        
        const { email, password } = req.body;
        console.log('here iam in authuser')
        const user = await User.findOne({ email })
        if (!user) {
            res.json({error:"user doesnot exist"}).status(400)       
        }
        console.log(1)
        const comparePassword = bcrypt.compare(password, user.password)
        if (!comparePassword) {
            res.json({error:"wrong password exist"}).status(400)       
        }
        console.log('here iam in authuser')
        
        let userdata = {
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token:generateToken(user._id)
        }
        res.json(userdata).status(201);
    } catch (error) {
        res.send({error:"something went wrong while login please retry"})
    }
    }
    
module.exports = { registerUser,authUser };
