const express=require('express');
//const bodyParser=require('body-parser');

const authRoute=require('./routes/auth');
//var path=require('./util/path');
//var Sequelize = require('./util/database');
const PORT = process.env.PORT || 5000;
const app=express();


app.use(express.json());

app.use('/auth',authRoute);

app.post((req,res,next)=>{    
    res.status(404).send('<h1>Page not found.</h1>');
});

app.listen(PORT);
 
console.log('Server running at http://127.0.0.1:'+PORT+'/');