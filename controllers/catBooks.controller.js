const modelGetBooks = require("../models/catBooks.model");

////

// create function get catBokks page and data
exports.catBooks = (request, response, next) => {
  modelGetBooks.getBooks(request.params["name"]).then((books) => {
    response.render("catBooks", {
      srcLinkCss: "/css/catbook.css",
      namePage: "category",
      nameHead: `the books category ${request.params["name"]}`,
      books: books,
      user: {
        id: request.session.userId,
        name: `${request.session.First_Name} ${request.session.Last_Name}`,
        srcImg: request.session.Src_Img,
      },
    });
  });
};
