const router = require("express").Router();
const ControllerLogin = require("../controllers/login.controller");

///

/// router for page login for  method GET

router.get("/data/", ControllerLogin.getLogin);

/// 

/// router for page login for  method POST

router.post("/data/", ControllerLogin.responsveLoginUser);

///

module.exports = router;
