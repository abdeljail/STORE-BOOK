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
    .then((res) => {
      request.session.userId = res._id;
      console.log(request.session);
      console.log(request.session.userId);
      // request.redirect('/')
      response.json({
        message: res.message,
      });
    })
    .catch((err) =>
      response.json({
        message: err,
      })
    );
};

///
