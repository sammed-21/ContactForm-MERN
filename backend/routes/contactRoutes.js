const express = require('express');
const { getNotes, createContact,getContactById,updateContact,deleteContact } = require('../controllers/contactControllers');
const protect = require('../middlewares/authMiddleware');

const router = express.Router()
// {
//   "firstName": "John",
//   "lastName": "Doe",
//   "email": "johndoe@example.com",
//   "mobile": {
//     "countryCode": "+1",
//     "number": "1234567890"
//   },
//   "address1": "123 Main St",
//   "address2": "Apt 4B",
//   "state": "California",
//   "country": "USA",
//   "zipCode": "12345"
// }

router.route('/').get(protect,getNotes)
router.route('/create').post(protect,createContact)
router.route('/:id').get(getContactById).put(protect,updateContact).delete(protect,deleteContact)
    


module.exports = router;
