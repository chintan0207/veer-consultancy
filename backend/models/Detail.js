import mongoose from 'mongoose';

const detailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    alterMobileNo: {
        type: String,
        required: false,
    },
    motherName: {
        type: String,
        required: false,
    },
    placeOfBirth: {
        type: String,
        required: true,
    },
    policeStation: {
        type: String,
        required: true,
    },
    identityProof: {
        type: String,
        required: true,
    },
    birthProof: {
        type: String,
        required: true,
    },
    addressProof: {
        type: String,
        required: true,
    }

});

const Detail = mongoose.model('details', detailSchema);

export default Detail;
