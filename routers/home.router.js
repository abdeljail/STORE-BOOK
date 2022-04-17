const router = require("express").Router();
const ControllerHome = require("../controllers/home.controller");

///

/// router for page home for  method GET

router.get("/home",  ControllerHome.getPageHome);
router.get("/",  ControllerHome.getPageHome);
router.post("/home",  ControllerHome.getDataHome);


module.exports = router;
