const router = require("express").Router();
const ControllerHome = require("../controllers/home.controller");

///

/// router for page home for  method GET

router.get("/home",  ControllerHome.getDataAndHome);
router.get("/", ControllerHome.getDataAndHome);

module.exports = router;
