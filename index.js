'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname));
app.set('view engine', 'hbs');
app.get('/', urlencodedParser, function(request, response) {
    response.sendFile(__dirname + '/index.html');
});
app.listen(PORT);
