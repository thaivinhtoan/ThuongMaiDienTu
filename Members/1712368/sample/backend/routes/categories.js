const express = require("express");
const Category = require("../models/category");
const router = express.Router();

router.get("", (req, res, next) => {
    Category.find().then(documents => {
        console.log(documents);
        res.status(200).json({
            message: "Category fetched successfully",
            categories: documents
        });
    });
});

module.exports = router;