var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '11019029',
  database : 'highfalleh'
});
connection.connect(function (err) {
  if (err) {
      return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
})
module.exports = connection;