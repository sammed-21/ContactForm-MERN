const express = require("express");
const dotenv = require("dotenv");
const contacts = require("./data/userContact");
const app = express();
const connectDB = require("./config/db")
const userRoutes= require("./routes/userRoutes")
const contactRoutes= require("./routes/contactRoutes")
const cors = require('cors');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
app.use(cors())
dotenv.config();

app.use(express.json());

connectDB();
 
 
app.use('/api/users', userRoutes)
app.use('/api/contact',contactRoutes)
app.use(notFound)
app.use(errorHandler)

 
app.listen(5000, () => {
  console.log('this is no 5000')
})
