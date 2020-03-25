const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const main = express();

const usersAPI = require('./apis/users/users.js');
const categoriesAPI = require('./apis/categories.js');
const authTriggers = require('./lambdas/auth-triggers.js');

main.use(cors());

main.use('/', [
    usersAPI,
    categoriesAPI
]);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// webApi is your functions name, and you will pass main as 
// a parameter
const webApi = functions.https.onRequest(main);

module.exports = {
    webApi,
    authTriggers
}