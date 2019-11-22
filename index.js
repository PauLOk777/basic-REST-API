'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const Schema = mongoose.Schema;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const userSchem = new Schema({
    name: String,
    age: Number,
});

const User = mongoose.model('User', userSchem);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    mongoose.connect(
        'mongodb://localhost:27017/usersdb',
        { useNewUrlParser: true },
        function(err) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Connected!!!');
        }
    );
    app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
    res.sendFile('index.html');
});

app.get('/api/users', (req, res) => {});

app.get('/api/users/:id', (req, res) => {});

app.post('/api/users', (req, res) => {});

app.put('/api/users', (req, res) => {});

app.delete('/api/users:id', (req, res) => {});
