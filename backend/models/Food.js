const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    rating: { type: Number, default: 0 },
    category: { type: String },
    comments: [{
        user: { type: String, required: true },
        text: { type: String, required: true },
        rating: { type: Number, required: true },
        date: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);
