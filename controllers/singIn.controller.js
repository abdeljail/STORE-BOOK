const modelSingIn = require("../models/singIn.model");
///

// create function get singup page

exports.getSingIn = (request, response, next) => {
  response.render("singin", {
    srcLinkCss: "./css/singin.css",
    namePage: "singin",
  });
};

///

// create function get responsve for singup user

exports.responsveLoginUser = (request, response, next) => {
  modelSingIn
    .loginUser(request.body)
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
