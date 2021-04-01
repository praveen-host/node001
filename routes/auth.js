const express=require('express');
const { check } = require('express-validator');
const router =express.Router();
const auth=require('../controllers/auth/login');

const user=require('../models/user');

router.post('/isUserExist',auth.isUserExist);    

router.use('/SendOtpToVerfiyEmail',auth.sendOtpToVerfiyEmail);
 
router.post('/signup',
    check('emailId').custom(value => {    
        return user.findOne({ where: {emailId: value} }).then(user => {        
        if (user) {
            throw new Error('E-mail already in use');
        }
        });
    }),
    auth.verifyOtpAndCreateUser
);
router.post('/login',
    auth.signin
);


module.exports=router;