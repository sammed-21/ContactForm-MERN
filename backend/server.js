const express = require("express");
const dotenv = require("dotenv");
const contacts = require("./data/userContact");
const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("api is dfdf running");
});

app.get("/api/contacts", (req, res) => {
  res.json(contacts);
});

app.get("/api/contact/:id", (req, res) => {
  const id = req.params.id;
  const contact = contacts.find((item) => item.id == id);

  res.json(contact);
});

app.listen(process.env.PORT, () =>
  console.log("server is listen on port 5000")
);
