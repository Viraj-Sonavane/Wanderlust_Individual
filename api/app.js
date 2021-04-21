var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");


const app = express();

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://csci620.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://localhost:3000/books',
issuer: 'https://csci620.us.auth0.com/',
algorithms: ['RS256']
});

// This is just the simplest use case, plugs-in the middleware and protects
// all routes.
 app.use(jwtCheck);

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Wanderlust application.",  });
});

require("./app/routes/photography.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
//testing server
app.post('/api/photography/create', (req,res) => {
res.send("added success");
});