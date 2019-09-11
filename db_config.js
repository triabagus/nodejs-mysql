var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "toor",
    password: "1",
    database: "nodejs_database" // you make a table sure
});

/**
 * cek connect database mysql
 */

// db.connect(function (err) { 
//     if (err) throw err;
//     console.log("Connected");
// }); 

/**
 * export module
 */
module.exports = db;