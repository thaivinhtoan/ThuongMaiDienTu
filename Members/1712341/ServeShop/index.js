var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.listen(3000);

// Đang đứng từ server localhost:3000, phải allow server 4200 của Angular thì Angular mới có thể req qua node được
app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// function MyController($scope, $http) {
//     const server = http.createServer((req, res) => {
//         res.setHeader('Content-Type', 'text/html');
//         res.setHeader('X-Foo', 'bar');
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('MehdiFilban solved this problem\nYour Header is set NOW\nGOOD LUCK...');
//     }).listen(port, () => {
//         console.log('your app is started');
//     });
// }


//body - parser (upload file)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//mongoose
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://PhanDiem1712341:DiemKhung2525@cluster0-ndeb7.mongodb.net/ShopEC?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.log("MongoDB connected err");
    } else {
        console.log("Connected successfully");
    }
});

//------------------------------------------------
// Multer upload imange for category
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/upload');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        console.log(file);
        if (file.mimetype == "image/bmp" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/png" ||
            file.mimetype == "image/gif") {
            cb(null, true);
        } else {
            return cb(new console.error('Only image are allowed!'))
        }
    }
}).single("SubCateImg");

//------------------------------------------------------
// setup config uplad member image multer
var Memberstorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/member/image');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

//upload member
var uploadMember = multer({
    storage: Memberstorage,
    fileFilter: function(req, file, cb) {
        if (file.mimetype == "image/bmp" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/png" ||
            file.mimetype == "image/gif") {
            cb(null, true);
        } else {
            return cb(new console.error('Only image are allowed!'))
        }
    }
}).single("MemberImg");

//------------------------------------------------
//Goi models
const Category = require("./Models/Category");
const SubCategory = require("./Models/SubCate");
const Member = require("./Models/Member");

//-------------------------------------------------
// lấy dữ liệu category ra
app.post("/api/cate", function(req, res) {
    Category.find(function(err, items) {
        if (err) {
            res.json({ result: 0, "err": err });
        } else {
            res.json(items);
        }
    });
})

// lấy dữ liệu member ra
app.post("/api/member", function(req, res) {
    Member.find(function(err, items) {
        if (err) {
            res.json({ result: 0, "err": err });
        } else {
            res.json(items);
        }
    });
})

// Lấy subCateID theo CateID
function _get_subCate_by_CateID(id) {
    var promise = Category.find({ _id: id }).exec();
    return promise;
}

function _get_infosubCate(id) {
    SubCategory.find({ _id: id }, function(err, el) {
        if (err) {
            return 0;
        } else {
            return el[0];
        }
    });
}

// lấy dữ liệu subcate ra
app.post("/api/subcate/:idCategory", function(req, res) {
    var id = req.params.idCategory; //-> laays ra 5e64b4b8e840433728d81830
    var Categories = _get_subCate_by_CateID(id); //-> nhét vào, tìm  CÁC category có id như trên
    Categories.then(function(category) { //-> Tìm ra rồi, thì đặt từng thằng trong đó là category
        category.forEach(function(Cat) { //-> duyệt từng cái nhỏ trong list category được tìm ra
            var list_id = Cat.SubCat_Id;
            SubCategory.find({ _id: { $in: list_id } }, function(err, el) {
                if (err) {
                    res.json({ result: 0, "err": err });
                } else {
                    res.json(el);
                }
            });
        });
    });
})


// show trang home của serve
app.get("/", function(req, res) {
    res.render("home");
})

// show trang cate ra để nhập dữ liệu
app.get("/cate", function(req, res) {
    res.render("cate.ejs");
})

//Nhập category vào trong mongodb
app.post("/cate", function(req, res) {
    var newCat = new Category({
        name: req.body.txtCate,
        SubCat_Id: []
    });
    newCat.save(function(err) {
        if (err) {
            console.log("Save Category err!", +err);
            res.json({ Result: 0 });
        } else {
            console.log("Successfully!");
            res.json({ Result: 1 });
        }
    })
})

//Show trang subcate ra
app.get("/subcate", function(req, res) {
    Category.find(function(err, items) {
        if (err) {
            res.send("Error");
        } else {
            res.render("subcate", { Cates: items });
        }
    });
});

//Nhập dữ liệu của trang subcate
app.post("/subcate", function(req, res) {
    //nguoi mua upload image len
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            res.json({ "result": 0, "err": err });
        } else if (err) {
            res.json({ "result": 0, "err": err });
        } else {
            // console.log(res.file); //thong tin file da upload
            //res.send({ result: 1, "file": req.file });
            //save subcate
            var subcat = new SubCategory({
                name: req.body.txtName, //nhap tu form
                image: req.file.filename, //nhap tu form
                file: req.body.txtFile //upload
            });
            subcat.save(function(err) {
                if (err) {
                    res.json({ result: 0 })
                } else {
                    //update SubCate_id
                    Category.findOneAndUpdate({ _id: req.body.selectCate }, { $push: { SubCat_Id: subcat._id } },
                        function(err) {
                            if (err) {
                                res.json({ result: 0 });
                            } else {
                                res.json({ result: 1 })
                            }
                        });
                }
            });
        }
    });
});

//Show trang nhập member ra
app.get("/AddMember", function(req, res) {
    res.render("member");
});

//Nhập member vào mongodb
app.post("/AddMember", function(req, res) {
    //nguoi mua upload image len
    uploadMember(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            res.json({ "result": 0, "err": err });
        } else if (err) {
            res.json({ "result": 0, "err": err });
        } else {
            console.log(res.file); //thong tin file da upload
            res.send({ result: 1, "file": req.file });
            //save member
            var member = new Member({
                stt: req.body.stt, //nhap tu form
                hoten: req.body.hoten, //nhap tu form
                mssv: req.body.mssv, //nhap tu form
                Addressmail: req.body.Addressmail, //nhap tu form
                EmailSV: req.body.EmailSV, //nhap tu form
                IDTeam: req.body.IDTeam, //nhap tu form
                image: req.file.filename, //nhap tu form
                file: req.body.txtFile //upload
            });
            member.save(function(err) {
                if (err) {
                    console.log("Save member err!", +err);
                    res.json({ result: 0 });
                } else {
                    console.log("Successfully!");
                    res.json({ Result: 1 });
                }
            });
        }
    });
});