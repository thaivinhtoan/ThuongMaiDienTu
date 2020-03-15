const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    image: { type: String, require: true },
    name: { type: String, require: true },
    author: { type: String, require: true },
    price: { type: Number, require: true },
    publicationDate: { type: Date, require: true },
    height: { type: Number, require: true },
    width: { type: Number, require: true },
    translator: { type: String, require: true },
    coverType: { type: String, require: true },
    numberOfPage: { type: Number, require: true }
});

module.exports = mongoose.model("Book", bookSchema);