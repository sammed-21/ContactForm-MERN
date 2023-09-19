const express = require("express");
const dotenv = require("dotenv");
const contacts = require("./data/userContact");
const app = express();
const connectDB = require("./config/db")
const userRoutes= require("./routes/userRoutes")
const cors = require('cors');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
app.use(cors())
dotenv.config();

app.use(express.json());

connectDB();
app.get("/", (req, res) => {
  res.send("api is dfdf running");
}); 
app.get("/api/userlists", (req, res) => {
  res.json(contacts);
});

app.get("/api/userlist/:id", (req, res) => {
  const id = req.params.id;
  const contact = contacts.find((item) => item.id == id);

  res.json(contact);
});
 
app.use('/api/users',userRoutes)
app.use(notFound)
app.use(errorHandler)

 
app.listen(5000, () => {
  console.log('this is no 5000')
})
