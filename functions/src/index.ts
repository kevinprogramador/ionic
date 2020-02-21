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
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("ese cochinosadfdf");
 })
