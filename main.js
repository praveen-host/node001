const express=require('express'); 
const sockets=require('./util/socket');

const mainRoute=require('./routes/mainroute');
 

const fk=require('./models/fk');

var path = require('path');
global.appRoot = path.resolve(__dirname);

const PORT = process.env.PORT || 5000;

var cors = require('cors');
const app=express();
app.use(cors());
app.use('/assets',express.static('assets'));

app.use(express.json());

app.use('/',mainRoute);

/*########## sockets ################*/
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => { 
  sockets['abc@gmail.com']=socket;
  console.log('a user connected');
  sockets["abc@gmail.com"].emit('chat message', 'Hello Message 3'); 
});

 
server.listen(PORT); 
console.log('Server running at http://127.0.0.1:'+PORT+'/');



