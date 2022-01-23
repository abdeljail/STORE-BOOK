const modelEditCatBook = require("../models/editCatBook.model");
///

// create function get edit  page

exports.getEditCatBook = (request, response, next) => {
  response.render("editCatBook", {
    namePage: "edit category book",
    srcLinkCss: "/public/css/addCatBook.css",
  });
};

// create function get responsve for edit category

exports.responsveEditCatBook = (request, response, next) => {
  modelEditCatBook
    .editCatBook(request.body)
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
