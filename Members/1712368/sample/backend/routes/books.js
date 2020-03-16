const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const multer = require("multer");

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "backend/images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + "." + ext);
    }
});
router.get("/:id", (req, res, next) => {
    Book.findById(req.params.id).then(book => {
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: "Book not found!" });
        }
    })
});
router.get("", (req, res, next) => {
    Book.find().then(documents => {
        res.status(200).json({
            message: "Book fetched successfully!",
            books: documents
        });
    });
});
router.post(
    "",
    multer({ storage: storage }).single("image"),
    (req, res, next) => {
        console.log(req.body);
        const url = req.protocol + '://' + req.get("host");
        const book = new Book({
            imagePath: url + "/images/" + req.file.filename,
            name: req.body.name,
            author: req.body.author,
            category: req.body.category,
            price: req.body.price,
            publisher: req.body.publisher,
            publicationDate: req.body.publicationDate,
            height: req.body.height,
            width: req.body.width,
            translator: req.body.translator,
            coverType: req.body.coverType,
            totalPages: req.body.totalPages,
            introduction: req.body.introduction,

        });
        console.log(book);
        book.save().then(addedBook => {
            res.status(201).json({
                message: "Add book successfully!",
                book: {
                    ...addedBook._doc,
                    id: addedBook._id,
                }
            });
        });

    }
);

module.exports = router;