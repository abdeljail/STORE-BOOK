const router = require("express").Router();
const ControllerSingIn = require("../controllers/singIn.controller");
const isPages = require("./guard");
// const body = require("express").urlencoded({ extends: true });

///

/// router for page singin for  method GET

router.get("/singin", isPages.isNotLogin, ControllerSingIn.getSingIn);

///

/// router for page singin for  method POST

router.post("/singin", ControllerSingIn.responsveLoginUser);

///

module.exports = router;
