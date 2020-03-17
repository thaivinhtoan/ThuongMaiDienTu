// Set up model mo ta cau truc cua sub cate
const mongoose = require("mongoose");

//Cau truc table trong mongoosedb
const SubcategorySchema = new mongoose.Schema({
    cateID: mongoose.Types.ObjectId,
    name: String,
    image: String,
    description: String,
    price: String,
    viewRate: String,
    Order: String
});

//Truy xuat den table trong mongoosedb
module.exports = mongoose.model("SubCate", SubcategorySchema);