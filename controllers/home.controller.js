////

// create function get singup page and data

exports.getDataAndHome = (request, response, next) => {
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
