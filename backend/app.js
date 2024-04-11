// MONGODB PW: Lupe0158
// MONGODB CONNECTION: mongodb+srv://mgqslupis:Lupe0158@cluster0.nivjftc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');

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

// Link the routes to the app
app.use('/api/stuff', stuffRoutes);

module.exports = app;


