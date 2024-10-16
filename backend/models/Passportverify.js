import mongoose from 'mongoose';

const passportSchema = new mongoose.Schema({
    birthPlace: {
        type: String,
        required: true,
        trim: true,
    },
    employeementType: {
        type: String,
        required: true,
        trim: true,
    },
    profession: {
        type: String,
        required: true,
        trim: true,
    },
    education: {
        type: String,
        required: true,
        trim: true,
    },
    policeStation: {
        type: String,
        required: true,
        trim: true,
    },
});

const PassportVerify = mongoose.model('PassportVerify', passportSchema);

export default PassportVerify;
