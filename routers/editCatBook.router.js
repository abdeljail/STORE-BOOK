const router = require("express").Router();
const ControllerEditCatBook = require("../controllers/editCatBook.controller");

///

/// router for page edit category book for  method GET

router.get("/data/editcat/:id/:name", ControllerEditCatBook.getEditCatBook);

/// router for page edit category book for  method POST

router.post("/data/editcat/", ControllerEditCatBook.responsveEditCatBook);

///

///

module.exports = router;
