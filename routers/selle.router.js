const router = require("express").Router();
const ControllerSelle = require("../controllers/selle.controller");

///

/// router for page  book for  method GET

router.get("/selle", ControllerSelle.getPageSelle);

///

module.exports = router;