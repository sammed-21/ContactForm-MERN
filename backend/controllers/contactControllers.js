    const asyncHandler = require('express-async-handler')
    const Contact = require('../models/contactModel')
const { NotBeforeError } = require('jsonwebtoken')

    const getNotes = asyncHandler(async (req, res) => {
        const contacts = await Contact.find({ user: req.user._id })
       
        res.json(contacts)
    })

const createContact = asyncHandler(async (req, res) => {
   const {
    firstName,
    lastName,
    email,
    mobile,
    address1,
    address2,
    state,
    country,
    zipCode,
  } = req.body;

    const userId = req.user._id;
    
      if (!firstName || !lastName || !email || !mobile || !address1) {
    res.status(400).json({ message: 'All required fields must be provided.' });
    return;
  }


   const contact = new Contact({
    firstName,
    lastName,
    email,
    mobile,
    address1,
    address2,
    state,
    country,
    zipCode,
    user: userId,
  });

   const createdContact = await contact.save();

  res.status(201).json(createdContact);
});

const getContactById = asyncHandler(async (req, res) => {
    
    const contact = await Contact.findById(req.params.id)
    if (contact) {
        res.json(contact)
    }
    else {
        res.status(404).json({message:"contact not found"})
    }

})
const updateContact = asyncHandler(async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      address1,
      address2,
      state,
      country,
      zipCode,
    } = req.body;

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    if (contact.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }

    // Update the contact fields
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.email = email;
    contact.mobile = mobile;
    contact.address1 = address1;
    contact.address2 = address2;
    contact.state = state;
    contact.country = country;
    contact.zipCode = zipCode;

    // Save the updated contact
    await contact.save();

    res.status(200).json({ message: "Contact updated successfully", contact });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
const deleteContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    if (contact.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }
 
    await contact.deleteOne();

    res.status(200).json({ message: "Contact removed" });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
})
    module.exports ={getNotes,createContact,getContactById,updateContact,deleteContact}