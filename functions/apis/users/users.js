const admin = require('firebase-admin');
const express = require('express');
const functions = require('firebase-functions');
const firebaseHelper = require('firebase-functions-helper');
const { check, validationResult } = require('express-validator');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const app = express();
//https://itnext.io/building-a-serverless-restful-api-with-cloud-functions-firestore-and-express-f917a305d4e6
const usersCollections = 'users';

// View all users
app.get('/users', (req, res) => {
    firebaseHelper.firestore
        .backup(db, usersCollections)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(`Cannot get users: ${error}`));
});

//Update an user
app.patch('/users/:user_email', [
    check('email')
    check('first_name')
    check('last_name1')
    check('last_name2')
    
], (req, res) => {
    //check if :user_email is valid? , not now
    
    //email should be unique, we can make updates with it
    
});

// Get user history search
app.get('/users/:user_email/history', (req, res) => {
    
});

module.exports = app;