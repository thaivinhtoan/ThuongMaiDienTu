const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/books");
const categoryRoutes = require("./routes/categories");
const mongoose = require("mongoose");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

var distDir = __dirname + "../dist/";
console.log(distDir);
app.use(express.static(distDir));

mongoose
    .connect(
        "mongodb+srv://meokg456:1Snr1zywA6p0wrTi@clustertest-pxawm.mongodb.net/book-store?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("Connect to mongodb Successfully!");
    })
    .catch(() => {
        console.log("Connection failed");
    });
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
});
app.use("/api/books", bookRoutes);
app.use("/api/categories", categoryRoutes);
module.exports = app;