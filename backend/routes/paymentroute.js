import express from "express";
import dotenv from "dotenv";
import crypto from 'crypto'
import axios from "axios";
dotenv.config();
const app = express();

const merchantId = process.env.MERCHANT_ID;
const saltKey = process.env.SALT_KEY;
const saltIndex = process.env.SALT_INDEX;
const frontendUrl = 'localhost:3000/confirm';

app.post('/verify-payment', async (req, res) => {

  try {
    // Create the PhonePe check status URL
    const checkStatusUrl = `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${orderId}`;

    // Generate the X-VERIFY header
    const stringToHash = `/pg/v1/status/${merchantId}/${orderId}${saltKey}`;
    const sha256Hash = crypto.createHash('sha256').update(stringToHash).digest('hex');
    const finalXHeader = `${sha256Hash}###${saltIndex}`;

    // Send the request to PhonePe to check the payment status
    const { data } = await axios.get(checkStatusUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': finalXHeader,
        'X-MERCHANT-ID': merchantId
      },
    });

    // Check the response from PhonePe
    if (data.success && data.code === 'PAYMENT_SUCCESS' && data.data.state === 'COMPLETED') {
      // Perform actions like saving the order, clearing the cart, etc.
      res.json({
        success: true,
        message: 'Payment successful',
        transactionId: data.data.transactionId, // Return the transaction ID if needed
        paymentMethod: data.data.paymentInstrument.type, // Return the payment method (e.g., UPI)
        amount: data.data.amount, // Return the payment amount
      });
    } else {
      res.json({ success: false, message: 'Payment failed or not completed.' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/create-payment', async (req, res) => {
  const { amount, orderId } = req.body;
  try {

    const payload = {
      merchantId: merchantId,
      merchantTransactionId: orderId,
      merchantUserId: 'ab@gmail.com',
      amount: amount * 100,
      redirectMode: "REDIRECT",
      redirectUrl: `${frontendUrl}?orderId=${orderId}`,
      // callbackUrl: `${frontendUrl}/confirm`,
      // mobileNumber: user.mobile,
      paymentInstrument: {
        type: "PAY_PAGE"
      }
    };

    // Convert payload to JSON string
    const payloadString = JSON.stringify(payload);

    // Convert JSON string to Base64
    const base64Encoded = Buffer.from(payloadString).toString('base64');

    // for header
    const stringToHash = `${base64Encoded}/pg/v1/pay${saltKey}`;
    const sha256Hash = crypto.createHash('sha256').update(stringToHash).digest('hex');
    const finalXHeader = `${sha256Hash}###${saltIndex}`;

    // Prepare request to PhonePe
    const request = {
      request: base64Encoded
    };

    // Send request to PhonePe
    const response = await axios.post('https://api.phonepe.com/apis/hermes/pg/v1/pay', request, {
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': finalXHeader
      }
    });

    // Check the response from PhonePe
    if (response.data.success) {
      // If payment is initiated successfully, send the redirect URL to the frontend
      res.json({
        success: true,
        data: response.data.data.instrumentResponse.redirectInfo.url,

      });
    } else {
      res.json({ success: false, message: "Failed to initiate payment" });
    }


  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ success: false, error: error.message });
  }



});
export default app