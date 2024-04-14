const express = require('express');
const router = express.Router();
const {signUp,login,logout,getCouponCodes,bookShow}  = require('../controllers/user.controller');


// POST /auth/signup
router.post('/signup', (req,res) => signUp(req,res));

// POST /auth/login
router.post('/login', (req,res) => login(req,res));

// POST /auth/logout
router.post('/logout', (req,res) => logout(req,res));

// POST /auth/getcouponcodes/{userId}
router.post('/coupons/:userId', (req,res) => getCouponCodes(req,res));


// POST /auth/bookshow/{userId}
router.post('/bookings', (req,res) => bookShow(req,res));



module.exports = router;
