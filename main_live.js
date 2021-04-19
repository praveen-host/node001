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


const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
 
io.on("connection", socket => {
  // either with send()
  socket.send("Hello!");

  // or with emit() and custom event names
  socket.emit("greetings", "Hey!", { "ms": "jane" }, Buffer.from([4, 3, 3, 1]));

  // handle the event sent with socket.send()
  socket.on("message", (data) => {
    console.log(data);
  });

  // handle the event sent with socket.emit()
  socket.on("salutations", (elem1, elem2, elem3) => {
    console.log(elem1, elem2, elem3);
  });
});

console.log('Server running at http://127.0.0.1:'+PORT+'/');