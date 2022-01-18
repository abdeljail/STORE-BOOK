////

// create function get singup page and data

exports.getDataAndHome = (request, response, next) => {
    response.render("home", {
      srcLinkCss: "./css/style.css",
      namePage: "home",
    });
  }

///
