const modelSingUp = require("../models/singUp.model");
///

// create function get singup page

exports.getSingUp = (request, response, next) => {
  response.render("singup", {
    srcLinkCss: "./css/singup.css",
    namePage: "singup",
  });
};

///

// create function get responsve for singup user

exports.responsveSingUp = (request, response, next) => {
  let resp;
  modelSingUp
    .addNweUser(request.body)
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
