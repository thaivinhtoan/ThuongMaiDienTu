// mo ta cau truc cua cateory
const mongoose = require("mongoose");

//Cau truc table trong mongoosedb
const categorySchema = new mongoose.Schema({
    name: String,
    SubCat_Id: [{ type: mongoose.Types.ObjectId }]
});

//Truy xuat den table trong mongoosedb
module.exports = mongoose.model("Category", categorySchema);