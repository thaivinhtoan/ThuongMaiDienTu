const mongoose = require("mongoose");
//Sách
const categorySchema = mongoose.Schema({
    name: { type: String, require: true }
});

module.exports = mongoose.model("Category", categorySchema);