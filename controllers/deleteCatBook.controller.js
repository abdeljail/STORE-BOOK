const modelDeleteCatBook = require("../models/deleteCatBook.model");
///

// create function get responsve for felete categoty book

exports.responsveDeleteCatBook = (request, response, next) => {
  modelDeleteCatBook
    .deleteCatBook(request.body.id)
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
