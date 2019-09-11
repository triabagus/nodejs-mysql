var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "toor",
    password: "1"
});

db.connect(function (err) { 
    if (err) throw err;
    console.log("Connected");
});