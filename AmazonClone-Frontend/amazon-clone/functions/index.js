/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const { request } = require('express');
const stripe = require('stripe')(process.env.STRIPER_KEY
);

// App config
const app = express();
// -middlewares
app.use(cors());
app.use(express.json());
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    // console.log('Payment Recieved for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: 'usd',
    });
    // ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
//   -Listen command
// exports.api = functions.https.onRequest(app);
app.listen(10000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Listening");
    }
})

//  (http://127.0.0.1:5001/nd-69650/us-central1/api).
// port 8768
