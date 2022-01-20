const router = require("express").Router();
const ControllerLogOut = require("../controllers/logOut.controller");
// const body = require("express").urlencoded({ extends: true });

///

/// router for page singin for  method GET

router.get("/logout", ControllerLogOut.getLogOut);

///


module.exports = router;