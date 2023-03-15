var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "petani-kopi" // nama database
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// db.connect(function(error) {
//     if(error) {
//         console.error(error);
//     } else {
//         console.info("Connect to Database");
//     }
// });

module.exports = db;