const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    book_name: String,
    book_price: Number,
    book_writer: String,
    book_image: String,
    book_type: String,
    book_item: String,
    book_publisher: String,
    book_detail: String,
    updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Book', BookSchema)