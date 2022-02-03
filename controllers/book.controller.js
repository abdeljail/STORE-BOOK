const modelGetBook = require("../models/book.model");

////

// create function get book page and data

exports.getbook = (request, response, next) => {
  modelGetBook.getbook(request.params["id"]).then((book) => {
    response.render("book", {
      srcLinkCss: "/css/book.css",
      namePage: "book",
      book: book,
      user: {
        id: request.session.userId,
        name: `${request.session.First_Name} ${request.session.Last_Name}`,
        srcImg: request.session.Src_Img,
      },
    });
  });
};

///
