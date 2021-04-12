const express=require('express'); 
const authRoute=require('./routes/auth'); 
const masterRoute=require('./routes/master'); 
const transactions=require('./routes/transactions');

const fk=require('./models/fk');

var path = require('path');
global.appRoot = path.resolve(__dirname);

const PORT = process.env.PORT || 5000;

var cors = require('cors');
const app=express();
app.use(cors());
app.use('/assets',express.static('assets'));

app.use(express.json());

app.use('/auth',authRoute);
app.use('/master',masterRoute);
app.use('/salesorder',transactions);

app.use((req,res,next)=>{    
    res.status(404).send('<h1>Page not found.</h1>');
});

app.listen(PORT);
 
console.log('Server running at http://127.0.0.1:'+PORT+'/');