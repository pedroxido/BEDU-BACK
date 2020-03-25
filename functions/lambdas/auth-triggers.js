var functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase, 'lambda');

const db = admin.firestore();
const usersCollections = 'users';


const createProfile = (userRecord, context) => {
    const {email, uid, displayName} = userRecord;

    return db
        .collection(usersCollections)
        .doc(uid)
        .set({email,displayName})
        .catch(console.error);
};

module.exports = {
    authOnCreate: functions.auth.user().onCreate(createProfile),
};