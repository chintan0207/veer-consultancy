import express from 'express';
import Inquiry from '../models/Inquiry.js';

const app = express();

app.post('/inquiry', async (req, res) => {
    try {
        const { name, mobileNo, visaType, country } = req.body;

        // Uncomment if needed for checking duplicate inquiries
        // const exist = await Inquiry.findOne({ visaType, country });
        // if (exist) {
        //     return res.send({ success: false, error: 'You have already contacted us with the same inquiry.' });
        // }

        const inquiryData = await Inquiry.create({ name, mobileNo, visaType, country });
        console.log(inquiryData);

        return res.status(200).send({ success: true, message: 'Thanks for your inquiry' });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.get('/inquiries', async (req, res) => {
    try {
        const inquiries = await Inquiry.find();
        if (!inquiries) {
            return res.status(404).send('Not found');
        }
        res.status(200).json({ inquiries });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
});

app.delete('/inquiry/:id', async (req, res) => {
    try {
        const deletedData = await Inquiry.findByIdAndDelete(req.params.id);
        console.log(deletedData);
        if (!deletedData) {
            return res.status(404).json({success:false,error:"inquiry not found"});
        }
        res.status(200).json({success:true,message:"Data Deleted successfully"})
    } catch (error) {
        res.status(500).json({success:false,error:error.message})
    }
});

export default app;