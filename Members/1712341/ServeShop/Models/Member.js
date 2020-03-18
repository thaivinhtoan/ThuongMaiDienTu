const mongoose = require("mongoose");

//Cau truc table member trong mongoosedb
const memberSchema = new mongoose.Schema({
    stt: String,
    hoten: String,
    mssv: String,
    Addressmail: String,
    EmailSV: String,
    IDTeam: String,
    image: String
});

//Truy xuat den table member trong mongoosedb
module.exports = mongoose.model("Member", memberSchema);