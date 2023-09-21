const mongoose = require('mongoose');

const contactSchema =  mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 5,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
  
  },
  mobile: {
    countryCode: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  address1: {
    type: String,
    required: true,
  },
  address2: String,
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
}, {
  timestamps: true, 
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
