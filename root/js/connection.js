const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'companyDB',
  password: 'yourRootPassword'
});

connection.connect(function(err) {
  if (err) throw err;
  //console.log(`connected on ${connection.threadId}`);
});

module.exports = connection;