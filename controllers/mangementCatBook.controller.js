const mangementCatBook = require("../models/mangementCatBook.model");
///

// create function get login page

exports.getManagmentCatBook = (request, response, next) => {
  mangementCatBook.getAllCatBook().then((cats) => {
    response.render("mangementCatBook", {
      namePage: "mangement category book",
      srcLinkCss: "/public/css/managmentCatBook.css",
      cats: cats,
    });
  });
};

// create function get responsve for singup user

// exports.responsveAddCatBook = (request, response, next) => {
//   console.log(request.body);
//   modelAddCatBook
//     .addNewCat(request.body)
//     .then((res) =>
//       response.json({
//         message: true,
//       })
//     )
//     .catch((err) =>
//       response.json({
//         message: err,
//       })
//     );
// };

///
