import express from 'express';
import PassportVerify from '../models/Passportverify.js';

const app = express.Router();

app.post('/passportverify', async (req, res) => {
    try {
        const { birthPlace, employeementType, profession, education, policeStation } = req.body;

        const passportData = await PassportVerify.create({ birthPlace, employeementType, profession, education, policeStation });
        console.log(passportData);

        return res.status(200).send({ success: true, message: 'Data saved successfully' });

    } catch (error) {
        console.error('Error when passportverify:', error);
        res.status(500).send('Internal server error');
    }
});

app.get('/allpassportverify', async (req, res) => {
    try {
        const passportData = await PassportVerify.find();
        if (!passportData) {
            return res.status(404).send('Not found');
        }
        return res.status(200).json({ passportData });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
});

app.delete('/passportverify/:id', async (req, res) => {
    try {
        const deletedData = await PassportVerify.findByIdAndDelete(req.params.id);
        console.log(deletedData);
        if (!deletedData) {
            return res.status(404).json({ success: false, error: "passortDetails not found" });
        }
        res.status(200).json({ success: true, message: "Data Deleted successfully" })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
});

app.get('/passport/:id', async (req, res) => {
    try {
        const data = await PassportVerify.findById(req.params.id)
        if (!data) {
            return res.status(404).json({ success: false, error: "passortDetails not found" });
        }
        //    console.log(data);
        res.status(200).json({ success: true, data })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
})

app.patch('/passport/:id', async (req, res) => {
    try {
        const data = await PassportVerify.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!data) {
            return res.status(404).json({ success: false, error: "passortDetails not found" });
        }
        console.log(data);
        res.status(200).json({ success: true, message: "Data Updated successfully" })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
})
export default app;
