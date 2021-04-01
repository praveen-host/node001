var http = require("http");
//var mysql = require('mysql');

var sequelize = new Sequelize('sssQw0eC4y', 'sssQw0eC4y', '6om4HGi5cb', {
    host: "remotemysql.com",
    port:"3306",
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

    // SQLite only
    //storage: 'path/to/database.sqlite'
});

// var con = mysql.createConnection({
//     host: "remotemysql.com",
//     port:"3306",
//     user: "sssQw0eC4y",
//     password: "6om4HGi5cb",
//     database:"sssQw0eC4y",
//   });

//   con.connect(function(err) {
//     if (err) throw err; 
//     console.log("Connected!");
//     //create table
//     // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     // con.query(sql, function (err, result) {
//     //     if (err) throw err;
//     //     console.log("Table created");
//     // });

//     //insert
//     // var  sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     // con.query(sql, function (err, result) {
//     //     if (err) throw err;
//     //     console.log("1 record inserted");
//     // });

//     // con.query("SELECT * FROM customers", function (err, result, fields) {
//     // if (err) throw err;
//     // console.log(result);
//     // });

//   });

const PORT = process.env.PORT || 5000;

http.createServer(function (request, response) {
   
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err; 
    response.end(result[0]["name"]);
        console.log(result);
        for(var i=0;i<result.length;i++){
            console.log(result[i]["name"]);
        }
    });
   
   //response.end(result[i]["name"]);


}).listen(PORT);

// Console will print the message
console.log('Server running at http://127.0.0.1:'+PORT+'/');