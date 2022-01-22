const modelAddCatBook = require("../models/addCatBook.model");
///

// create function get login page

exports.getAddCatBook = (request, response, next) => {
  response.render("addCatBook", {
    namePage: "add cat book",
    srcLinkCss: "/public/css/addCatBook.css",
  });
};

// create function get responsve for singup user

exports.responsveAddCatBook = (request, response, next) => {
  console.log(request.body);
  modelAddCatBook
    .addNewCat(request.body)
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
