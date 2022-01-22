const modelLogin = require("../models/login.model");
///

// create function get login page

exports.getLogin = (request, response, next) => {
  response.render("login", {
    namePage: "admin",
    srcLinkCss: "/public/css/style.css",
  });
};

///

// create function get responsve for login user

exports.responsveLoginUser = (request, response, next) => {
  modelLogin
    .login(request.body)
    .then((res) => {
      console.log(res);
      // request.session.userId = res._user._id;
      // request.session.First_Name = res._user.First_Name;
      // request.session.Last_Name = res._user.Last_Name;
      // request.session.Src_Img = res._user.Src_Img;
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
