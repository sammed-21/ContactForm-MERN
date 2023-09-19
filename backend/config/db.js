const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
}

module.exports = connectDB;