const router = require("express").Router();
const ControllerAddCatBook = require("../controllers/addCatBook.controller");

///

/// router for page add category book for  method GET

router.get("/data/addcat/", ControllerAddCatBook.getAddCatBook);

/// router for page add category book for  method POST

router.post("/data/addcat/", ControllerAddCatBook.responsveAddCatBook);

///

///

module.exports = router;
