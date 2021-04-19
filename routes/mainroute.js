const express=require('express');
const { check } = require('express-validator');
const router =express.Router();
const isAuth = require('../middleware/is-auth');

const authRoute=require('./auth'); 
const masterRoute=require('./master'); 
const transactions=require('./transactions');

router.use('/auth',authRoute);
router.use('/master',isAuth,masterRoute);
router.use('/transaction',isAuth,transactions);
 
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

router.use((req,res,next)=>{    
    res.status(404).send('<h1>Page not found.</h1>');
});


module.exports=router;