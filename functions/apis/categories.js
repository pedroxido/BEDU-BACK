const admin = require('firebase-admin');
const express = require('express');
const functions = require('firebase-functions');
const firebaseHelper = require('firebase-functions-helper');

admin.initializeApp(functions.config().firebase, 'categories');

const db = admin.firestore();
const app = express();

const usersCollections = 'Category';

// View all categories
app.get('/categories', (req, res) => {
    firebaseHelper.firestore
        .backup(db, usersCollections)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(`Cannot get users: ${error}`));
})

module.exports = app;