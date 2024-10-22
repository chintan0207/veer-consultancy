import mongoose from 'mongoose';

const passportSchema = new mongoose.Schema({
    birthPlace: {
        type: String,
        required: true,
    },
    employeementType: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    policeStation: {
        type: String,
        required: true,
    },
});

const PassportVerify = mongoose.model('PassportVerify', passportSchema);

export default PassportVerify;
