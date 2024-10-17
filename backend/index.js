import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactroute from "./routes/contactroute.js"
import Inquiryroute from "./routes/Inquiryroute.js"
import newsletterroute from "./routes/newsletterroute.js"
import passportroute from "./routes/passportroute.js"
import datas from "./routes/Api/datas.js"

import registerroute from './routes/registerroute.js'
import loginroute from './routes/loginroute.js'
import accountroute from './routes/accountroute.js'
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const DB = process.env.MONGODB_URL

mongoose
  .connect(DB)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("mongo error", err));


// importing contact routes
app.use('/', contactroute)
app.use('/', passportroute)
app.use('/', Inquiryroute)
app.use('/', newsletterroute)
app.use('/', datas)

app.use('/', registerroute)
app.use('/', loginroute)
app.use('/', accountroute)

app.listen(3034, () => {
  console.log('Server connected');
});