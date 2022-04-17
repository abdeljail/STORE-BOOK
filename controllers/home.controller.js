const modelGetSomeBooks = require("../models/home.model");

////

// create function get home page and data

exports.getPageHome = (request, response, next) => {
  response.render("home", {
    srcLinkCss: "./css/style.css",
    namePage: "home",
    user: {
      id: request.session.userId,
      name: `${request.session.First_Name} ${request.session.Last_Name}`,
      srcImg: request.session.Src_Img,
    },
  });
};

///

// create function get data for page home

exports.getDataHome = (request, response) => {
  modelGetSomeBooks
    .getLimitBooks(request.body.id, request.body.limit)
    .then(async (books) => {
      await response.json({
        books: books,
      });
    });
};
