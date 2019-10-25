'use strict'

const express = require("express");
const app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.sendFile('index.html');
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});