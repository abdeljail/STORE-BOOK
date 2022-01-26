const router = require("express").Router();
const ControllerAddBook = require("../controllers/addBook.controller");
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/images");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

///

/// router for page add book for  method GET

router.get("/data/addbook", ControllerAddBook.getAddBook);

///

/// router for page add book for  method POST

router.post(
  "/data/addbook",
  upload.single("img"),
  ControllerAddBook.responseAddBook
);

///

module.exports = router;
