import express from "express";
import multer from "multer";
import path from "path";
import Detail from "../models/Detail.js";
import File from "../models/File.js";

const app = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // store the files in this 
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // unique saved file name
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

app.post('/details', upload.fields([
    { name: 'identityProof' },
    { name: 'birthProof' },
    { name: 'addressProof' }
]), async (req, res) => {
    try {

        const { identityProof, birthProof, addressProof } = req.files;
        const { name, motherName, placeOfBirth, education, employeementType,
            serviceType, email, mobileNo, alterMobileNo, policeStation, } = req.body;

        // function for create static path
        const builtPath = (filename) => {
            let filePath = path.join('uploads', filename);
            filePath = filePath.replace(/\\/g, '/');
            return filePath
        }
        // Save the file details to the database
        const result1 = await File.create({
            filename: identityProof[0].filename,
            filepath: builtPath(identityProof[0].filename),
        });

        const result2 = await File.create({
            filename: birthProof[0].filename,
            filepath: builtPath(birthProof[0].filename),
        });

        const result3 = await File.create({
            filename: addressProof[0].filename,
            filepath: builtPath(addressProof[0].filename),
        });

        // Save detail in the Detail collection
        const detail = await Detail.create({
            name, motherName, placeOfBirth, education, employeementType, serviceType, email, mobileNo, alterMobileNo,
            policeStation,
            identityProof: result1.filepath,
            birthProof: result2.filepath,
            addressProof: result3.filepath
        })
        console.log(detail)
        res.json({ success: true, message: 'Thanks Data saved successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error occurred');
    }
});

app.get('/details', async (req, res) => {
    try {
        const data = await Detail.find();
        res.json({ data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send(`Error fetching data: ${error.message}`);
    }
});


app.delete('/details/:id', async (req, res) => {
    try {
        const deletedData = await Detail.findByIdAndDelete(req.params.id);

        if (!deletedData) {
            return res.status(404).json({ success: false, error: "details not found" });
        }
        res.json({ success: true, message: "Data Deleted successfully" })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
});

export default app