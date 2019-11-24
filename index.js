'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const Schema = mongoose.Schema;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const userSchem = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
    },
    { versionKey: false }
);
const User = mongoose.model('User', userSchem);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

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
    console.log('Get all users');
    User.find({}, (err, users) => {
        if (err) return console.error(err);
        res.status(200);
        res.send(users);
    });
});

app.get('/api/users/:id', (req, res) => {
    console.log('Get by id');
    User.findById(req.params.id, (err, user) => {
        if (err) {
            res.status(404);
            res.send('Error');
            return;
        }

        res.status(200);
        res.send(user);
    });
});

app.post('/api/users', urlencodedParser, (req, res) => {
    console.log('Add new user');
});

app.put('/api/users', urlencodedParser, (req, res) => {
    console.log('Update user');
});

app.delete('/api/users/:id', (req, res) => {
    console.log('Delete by id');
    User.findByIdAndDelete(req.params.id, (err, user) => {
        if (err) {
            res.status(404);
            res.send('Error');
            return;
        }

        res.status(200);
        res.send(user);
    });
});

app.use(function(req, res, next) {
    res.status(404);
    res.send('<h1>Page not found</h1>');
});

process.on('SIGINT', () => {
    process.exit(0);
});
