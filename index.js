var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var errorException = require("./middleware/errorException.js");
var jsonMiddleware = require("./middleware/jsonMiddleware.js");
var app = express();

// Parse json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Middleware to catch error
app.use(errorException);

// Middleware for check json header
app.use('/', jsonMiddleware);

// Applying routes
routes(app);

let port = process.env.PORT || 5000;

// Listening to port
app.listen(port, function () {
    console.log("Node RestApi server is running on " + port + " port.");
});
