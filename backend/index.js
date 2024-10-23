import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactroute from "./routes/contactroute.js"
import Inquiryroute from "./routes/Inquiryroute.js"
import newsletterroute from "./routes/newsletterroute.js"
import datas from "./routes/Api/datas.js"
import paymentroute from "./routes/paymentroute.js"
import registerroute from './routes/registerroute.js'
import loginroute from './routes/loginroute.js'
import accountroute from './routes/accountroute.js'
import detailroute from './routes/detalisroute.js'
import reviews from './routes/Api/reviews.js'
import Razorpay from "razorpay"



import path from "path";  // Ensure this is the path module
import { fileURLToPath } from "url";  // For static file serving
dotenv.config();

const app = express();

// // Static file serving (serves files from the uploads folder)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(cors());
app.use(express.json());

const DB = process.env.MONGODB_URL



mongoose
  .connect(DB)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("mongo error", err));


  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

// importing contact routes
app.use('/', contactroute)
app.use('/', Inquiryroute)
app.use('/', newsletterroute)
app.use('/', datas)
app.use('/', reviews)
app.use('/', paymentroute)
app.use('/', registerroute)
app.use('/', loginroute)
app.use('/', accountroute)
app.use('/', detailroute)


app.post("/razorpay", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // Convert amount to smallest currency unit (e.g., paise for INR)
    currency: 'INR',
    receipt: "receipt#1",
    payment_capture: '1'
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response)
    res.json({
      success: true,
      id: response.id,
      currency: response.currency
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Please try again' });
  }
});

app.listen(3034, () => {
  console.log('Server connected');
});
