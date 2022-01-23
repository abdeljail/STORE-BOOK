const router = require("express").Router();
const ControllerAddCatBook = require("../controllers/mangementCatBook.controller");

///

/// router for page managment book for  method GET

router.get("/data/managmentcategory/", ControllerAddCatBook.getManagmentCatBook);

/// router for page managment book for  method POST

// router.post("/data/addcat/", ControllerAddCatBook.responsveAddCatBook);

///

///

module.exports = router;