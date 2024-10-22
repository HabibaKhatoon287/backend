const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); // Import the controller functions

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
module.exports = router;
