// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

let connectionString;

if (process.env.NODE_ENV === 'production') {
    connectionString = process.env.DB_URL;
} else {
    connectionString = process.env.MONGO_URI
}

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log(`connected to MongoDB on ${db.host}:${db.port}`);
});

db.on('error', (error) => {
    console.log('Database error', error);
});

// import models
// import Bounty from './bounty';
const Bounty = require('./bounty');

module.exports = {
    Bounty
}