const router = require("express").Router();
const ControllerCatBooks = require("../controllers/catBooks.controller");

///

/// router for page home for  method GET

router.get("/catBooks/:name", ControllerCatBooks.catBooks);

module.exports = router;