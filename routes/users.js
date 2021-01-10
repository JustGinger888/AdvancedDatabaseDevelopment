  
const express = require('express');
const router = express.Router();


// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Handle Register
router.post('/register', (req, res) => {

});

module.exports = router;