import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

// Interfaces

interface User {
    createdAt?: string;
    customerId?: any;
    disabled?: boolean;
    displayName?: string;
    email?: string;
    emailVerified?: boolean;
    notifications?: object;
    photoURL?: string;
    source?: string;
    token?: string;
    uid: string;
}

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const userCreate = functions.auth.user().onCreate(
async (event) => {
    const user: User = {
        uid: event.uid, 
        displayName: event.displayName || ''
    };
    return db.doc(`users/user.uid`).set(user);
})
