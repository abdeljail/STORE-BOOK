const router = require("express").Router();
const ControllerBook = require("../controllers/book.controller");

///

/// router for page  book for  method GET

router.get("/book/:id", ControllerBook.getbook);

///

module.exports = router;
