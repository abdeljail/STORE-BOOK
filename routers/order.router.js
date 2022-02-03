const router = require("express").Router();
const ControllerOrder = require("../controllers/order.controller");

///

/// router for  order book for  method POST

router.post("/order", ControllerOrder.responsveOrder);

///

module.exports = router;
