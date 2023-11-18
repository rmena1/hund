import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Stripe } from 'stripe';
import {
    STRIPE_SECRET_KEY
  } from "@env"; 

admin.initializeApp();

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
});

export const paymentSheetSetupIntent = functions.https.onRequest(async (req, res) => {


  try {
  
    // Extract customer ID from the request (you may have your own logic to retrieve or create a customer)
    const customerId = req.body.customerId;

    // Create an Ephemeral Key
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customerId },
      { apiVersion: '2023-10-16' }
    );

    // Create a SetupIntent
    const setupIntent = await stripe.setupIntents.create({
      ...{customer: customerId},
    });

    // Return the SetupIntent, Ephemeral Key, and Customer information to the client
    res.json({
      setupIntent,
      ephemeralKey,
      customer: customerId,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});