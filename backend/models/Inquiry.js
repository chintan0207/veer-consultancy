import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    mobileNo: {
        type: String,
        required: true,
        trim: true,
    },
    visaType: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
