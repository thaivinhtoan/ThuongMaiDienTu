const mongoose = require("mongoose");
//Sách
const bookSchema = mongoose.Schema({
    imagePath: { type: String, require: true },
    name: { type: String, require: true },
    author: { type: String, require: true },
    price: { type: Number, require: true },
    publicationDate: { type: String, require: true },
    height: { type: Number, require: true },
    width: { type: Number, require: true },
    translator: { type: String, require: true },
    coverType: { type: String, require: true },
    totalPages: { type: Number, require: true }
});

module.exports = mongoose.model("Book", bookSchema);