import express from "express";
import multer from "multer";
import path from "path";
import Detail from "../models/Detail.js";
import File from "../models/File.js";

const app = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Where to store the files (uploads folder)
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Define the file name (using original name with timestamp)
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

app.post('/details', upload.fields([
    { name: 'identityProof', maxCount: 1 },
    { name: 'birthProof', maxCount: 1 },
    { name: 'addressProof', maxCount: 1 }
]), async (req, res) => {
    try {

        const { identityProof, birthProof, addressProof } = req.files;
        // console.log(identityProof[0].filename)
        const { name, motherName, placeOfBirth, education, employeementType,
            serviceType, email, mobileNo, alterMobileNo, policeStation, } = req.body;

        const exist = await Detail.findOne({ email, mobileNo });
        if (exist) {
            return res.send({ success: false, error: 'You have already submitted with the same query.' });
        }

        const builtPath = (filename) => {
            let filePath = path.join('uploads', filename);
            filePath = filePath.replace(/\\/g, '/');
            return filePath
        }
        // console.log(builtPath(identityProof[0].filename))
        // Save the file details to the database
        const identity = new File({
            filename: identityProof[0].filename,
            filepath: builtPath(identityProof[0].filename),
        });
        const birth = new File({
            filename: birthProof[0].filename,
            filepath: builtPath(birthProof[0].filename),
        });
        const address = new File({
            filename: addressProof[0].filename,
            filepath: builtPath(addressProof[0].filename),
        });
        // console.log(address)
        const result1 = await identity.save()
        const result2 = await birth.save()
        const result3 = await address.save()

        // Save detail in the Detail collection
        const detail = await new Detail({
            name, motherName, placeOfBirth, education, employeementType, serviceType, email, mobileNo, alterMobileNo,
            policeStation,
            identityProof: result1.filepath,
            birthProof: result2.filepath,
            addressProof: result3.filepath
        }).save();  // Save the Detail object
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
        console.log(deletedData);
        if (!deletedData) {
            return res.status(404).json({ success: false, error: "details not found" });
        }
        res.status(200).json({ success: true, message: "Data Deleted successfully" })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
});

export default app