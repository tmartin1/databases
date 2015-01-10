var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chatDB",
  port: 3000
});

connection.connect();


// write stuff to database, params = what to write and where



// read stuff from database, params = what to write and where
// var queryMaker = function(row, table, column, identifier) {
//   var template = "SELECT ?? FROM ?? WHERE ?? = ?";
//   var formatted = mysql.format(template, Array.prototype.slice.apply(arguments));
//   connection.query(formatted);
// });



//


