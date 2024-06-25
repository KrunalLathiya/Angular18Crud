const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
const BusinessSchema = new Schema({
    person_name: {
        type: String,
        required: true,
        trim: true
    },
    business_name: {
        type: String,
        required: true,
        trim: true
    },
    business_gst_number: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    collection: 'business'
});

module.exports = mongoose.model('Business', BusinessSchema);
