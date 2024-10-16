import mongoose from 'mongoose';

const newsLetterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, // corrected 'require' to 'required'
        trim: true,
    },
});

const NewsLetter = mongoose.model('NewsLetter', newsLetterSchema);

export default NewsLetter;
