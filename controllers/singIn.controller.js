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
      request.session.userId = res._user._id;
      request.session.First_Name = res._user.First_Name;
      request.session.Last_Name = res._user.Last_Name;
      request.session.Src_Img = res._user.Src_Img;
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
