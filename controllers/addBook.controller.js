const modelAddBook = require("../models/addBook.model");
///

exports.getAddBook = (request, response, next) => {
  modelAddBook.getAllcategories().then((catBooks) => {
    response.render("addBook", {
      namePage: "add book",
      srcLinkCss: "/public/css/addBook.css",
      catBooks: catBooks,
    });
  });
};

exports.responseAddBook = (request, response, next) => {
  modelAddBook
    .responseAddBook(request.body, { img: request.file.filename })
    .then((re) => {
      response.redirect("addBook");
    })
    .catch((err) => {
      console.log("none");
    });
};

///
