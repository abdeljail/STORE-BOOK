const router = require("express").Router();
const ControllerSingUp = require("../controllers/singUp.controller");
const isPages = require("./guard");
// const body = require("express").urlencoded({ extends: true });

///

/// router for page singup for  method GET

router.get("/singup", isPages.isNotLogin ,ControllerSingUp.getSingUp);

///

/// router for page singup for  method POST

router.post("/singup", ControllerSingUp.responsveSingUp);

///

module.exports = router;
