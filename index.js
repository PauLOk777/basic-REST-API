'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const Schema = mongoose.Schema;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const userSchem = new Schema(
    { name: String, age: Number },
    { versionKey: false }
);
const User = mongoose.model('User', userSchem);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

mongoose.connect(
    'mongodb://localhost:27017/usersdb',
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err) {
        if (err) console.error(err);
        console.log('>>> Database was connected');
        app.listen(PORT, '127.0.0.1', function() {
            console.log('>>> Server is running!');
        });
    }
);

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/api/users', (req, res) => {
    res.send('Hi');
    console.log('Get all users');
});

app.get('/api/users/:id', (req, res) => {
    console.log('Get by id');
});

app.post('/api/users', urlencodedParser, (req, res) => {
    console.log('Add new user');
});

app.put('/api/users', urlencodedParser, (req, res) => {
    console.log('Update user');
});

app.delete('/api/users:id', (req, res) => {
    console.log('Delete by id');
});

process.on('SIGINT', () => {
    process.exit(0);
});