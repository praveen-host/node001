const express=require('express');
const { check } = require('express-validator');
const router =express.Router();
const auth=require('../controllers/auth/login');

const user=require('../models/user');
//const gst=require('../models/gst');
//const uom=require('../models/uom');
//const product=require('../models/product');
//const fk=require('../models/fk');


router.use('/isUserExist',auth.isUserExist);    

router.use('/SendOtpToVerfiyEmail',auth.sendOtpToVerfiyEmail);
 
router.post('/verifyOtpAndCreateUser',
   
    auth.verifyOtpAndCreateUser
);
router.post('/login',
    auth.signin
);


module.exports=router;