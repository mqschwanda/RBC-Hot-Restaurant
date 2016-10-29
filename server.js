var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root", //Your username
    password: "nothing", //Your password
    database: ""//Your database name
});

var app = express();
var PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


function getReservations(callback){
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);

    connection.query('SELECT * FROM customers', function(err, res){
      if (err){
        console.log("SQL database could not be reached");
        connection.end();
      } else {
        reservations = [];

        function Reservation(customerEmail, customerName, phoneNumber, isEating){
            this.customerEmail = customerEmail;
            this.customerName = customerName;
            this.phoneNumber = phoneNumber;
            this.isEating = isEating;
        }
          for (var i = 0; i < res.length; i++) {
            var currentReservation = new Reservation(res[i].customerEmail, res[i].customerName, res[i].phoneNumber, res[i].isEating,);

            reservations.push(currentReservation);
          }
          connection.end();

          callback(reservations);
      }
    })
  })
}

// Create a New Reservation - takes in JSON input
app.post('/api/new', function(req, res){
  var newreservation = req.body;
  newReservation.routeName = newreservation.customerName.replace(/\s+/g, '').toLowerCase();

  //link to my SQL database
  var connection = mysql.createConnection({
      host: "localhost",
      port: 3000,
      user: "root", //Your username
      password: "nothing", //Your password
      database: ""//Your database name
  });

  //Push to SQL
  connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id" + connection.threadId);
       connection.query('INSERT INTO customer SET ?', {
         customerEmail: newreservation.customerEmail,
	        customerName: newreservation.customerName,
	         phoneNumber: newreservation.phoneNumber,
	          isEating: newreservation.isEating
        }, function(err, res){
          if(err){
            console.log('\nSorry. The SQL database could not be updated.');
            //if throw err then end connection
            connection.end();
          }
        });
  });

   res.json(newreservation);
});


// Starts the server to begin listening
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
