import express from "express"
import dotenv from "dotenv"
import Otp from "../models/Otp.js"
import twilio from "twilio"
import { error } from "pdf-lib"

dotenv.config()

const app = express.Router();

const account_sid = process.env.TWILIO_ACCOUNT_SID
const twilio_authtoken = process.env.TWILIO_ACCOUNT_AUTHTOKEN

const twilioClient = new twilio(account_sid, twilio_authtoken)

const otpGenration = (length) => {
    let digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * digits.length)];
    }
    return otp;
}

app.post('/send-otp', async (req, res) => {
    try {
        const { phoneNumber } = req.body;
        const otp = otpGenration(6);

        const cDate = new Date();
        await Otp.findOneAndUpdate(
            { phoneNumber }, // Find by phoneNumber
            { otp, otpExpiration: new Date(cDate.getTime()) }, // Update OTP and expiration
            { upsert: true, new: true, setDefaultsOnInsert: true } // Insert new if not found
        );


        await twilioClient.messages.create({
            body: `Your OTP is ${otp}`,
            from: process.env.TWILIO_ACCOUNT_PHONE_NUMBER,
            to: phoneNumber
        });


        console.log(otp);
        res.json({ success: true, message: 'OTP sent successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error occurred');
    }
});

app.post('/verify-otp', async (req, res) => {
    try {

        const { phoneNumber, otp } = req.body

        const otpData = await Otp.findOne({
            phoneNumber,
            otp
        })

        if (!otpData) {
            return res.status(400).json({
                success: false,
                message: "you are enter wrong OTP!"
            })
        }

        const otpVerification = async (otpTime) => {
            console.log("Milliseconds" + otpTime)
            const cDateTime = new Date();
            let diffValue = (otpTime - cDateTime.getTime()) / 1000;
            diffValue /= 60
            const minutes = Math.abs(diffValue)
            console.log("expiretion minutes" + minutes)

            if (minutes > 2) {
                return true
            }
            return false;
        }

        const isOtpExpired = otpVerification(otpData.otpExpiration)

        if (isOtpExpired) {
            return res.status(400).json({
                success: false,
                message: "you OTP been Expired"
            })
        }

        return res.status(200).json({
            success: true,
            message: "OTP verify Successfully"
        })

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error occurred');
    }
})

export default app;
