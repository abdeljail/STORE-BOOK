const router = require("express").Router();
const ControllerDeleteCatBook = require("../controllers/deleteCatBook.controller");

///

/// router for delete category book for  method POST

router.post("/data/deletecat/", ControllerDeleteCatBook.responsveDeleteCatBook);

///

///

module.exports = router;