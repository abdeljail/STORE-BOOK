const modelOrder = require("../models/order.model");
///

///

// create function get responsve for singup user

exports.responsveOrder = (request, response, next) => {
  let order = {
    idUser: request.session.userId,
    idBook:request.body.numberOrder
  }
  modelOrder
    .addNweOrder(order)
    .then((res) =>
      response.json({
        message: true,
      })
    )
    .catch((err) =>
      response.json({
        message: err,
      })
    );
};

///
