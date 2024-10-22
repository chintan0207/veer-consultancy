import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        required: true,
    },
    visaType: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
