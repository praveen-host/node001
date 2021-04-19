const express=require('express');
const { check } = require('express-validator');
const router =express.Router();

const auth=require('../controllers/auth/login');

const user=require('../models/user');
 


router.use('/isUserExist',auth.isUserExist);    

router.use('/SendOtpToVerfiyEmail',auth.sendOtpToVerfiyEmail);
 
router.post('/verifyOtpAndCreateUser',   
    auth.verifyOtpAndCreateUser
);
router.post('/login',
    auth.signin
);


module.exports=router;