
import User from "../models/Register.js";
import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config();
const app = express();

// get account data
app.get('/account', async (req, res) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ error: 'Token not provided' });
      }
  
      jwt.verify(token, 'secret-key', async (err, decoded) => {
        if (err) {
          return res.status(401).json({ error: 'Invalid token' });
        }
  
        const user = await User.findOne({ email: decoded.email });
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        const accountInfo = {
          name: user.name,
          email: user.email,
          mobile: user.mobile,
      
        };
  
        res.json({ accountInfo:accountInfo });
      });
    } catch (error) {
      console.error('Error fetching cart items:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  
  // ACCOUNT INFORMATION UPDATE 
  
  app.post('/update-account-data', async (req, res) => {
    const { name,email,mobile,password } = req.body;
  
  
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({success: false,  error: 'Token not provided' });
      }
  
      jwt.verify(token, 'secret-key', async (err, decoded) => {
        if (err) {
          return res.status(401).json({success: false, error: 'Invalid token' });
        }
  
        const user = await User.findOne({ email: decoded.email });
        if (!user) {
          return res.status(404).json({success: false, error: 'User not found' });
        }
  
       
  
        const hashedPassword = await bcrypt.hash(password, 10);
          user.name = name;
        user.email = email;
        user.mobile = mobile;
        user.password=hashedPassword
      await user.save();
  
      const accountInfo = {
      
          name: user.name,
          email: user.email,
          mobile: user.mobile,
        
      };
     
  
      res.json({ success: true, message: 'Thanks Your Information has Been Updated' ,accountInfo:accountInfo});  
      
      });
    } catch (error) {
      console.error('Error fetching user address:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
     
  
   
  });

  export default app