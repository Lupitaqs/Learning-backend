// MONGODB PW: Lupe0158
// MONGODB CONNECTION: mongodb+srv://mgqslupis:Lupe0158@cluster0.nivjftc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express');
const mongoose = require('mongoose');

const Thing = require('./models/thing');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://mgqslupis:Lupe0158@cluster0.nivjftc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });

// Middleware to handle CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware to handle GET requests
app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'My first thing',
            description: 'All of the info about my first thing',
            imageUrl: '',
            price: 4900,
            userId: 'qsdfqsdf'
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'My second thing',
            description: 'All of the info about my second thing',
            imageUrl: '',
            price: 2900,
            userId: 'qsdfqsdf'
        }
    ];
    res.status(200).json(stuff);
});

// Middleware to handle POST requests
app.post('/api/stuff', (req, res, next) => {
    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    });
    thing.save()
        .then(() => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error
            });
        });
});

module.exports = app;


