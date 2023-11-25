const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PCategory',
        required: true
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Subcategory', subcategorySchema);