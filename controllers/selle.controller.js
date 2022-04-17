const modelSelle = require("../models/selle.model");
///

// create function get  page selle
exports.getPageSelle = (request, response, next) => {
  modelSelle.getAllOrders(request.session.userId).then((Orders) => {
    console.log(Orders);
    response.render("selle", {
      srcLinkCss: "/css/selle.css",
      namePage: "selle",
      user: {
        id: request.session.userId,
        name: `${request.session.First_Name} ${request.session.Last_Name}`,
        srcImg: request.session.Src_Img,
      },
    });
  });
};

exports.getPageSelle = (request, response, next) => {
  
  modelSelle.getAllOrders(request.session.userId).then((Orders) => {
    console.log(Orders);
  });
};

// create function get responsve for selle

// exports.responsveOrder = (request, response, next) => {
//   let order = {
//     idUser: request.session.userId,
//     idBook:request.body.numberOrder
//   }
//   modelOrder
//     .addNweOrder(order)
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
