// Set up model mo ta cau truc cua sub cate
const mongoose = require("mongoose");

//Cau truc table trong mongoosedb
const SubcategorySchema = new mongoose.Schema({
    name: String,
    image: String
});

//Truy xuat den table trong mongoosedb
module.exports = mongoose.model("SubCate", SubcategorySchema);