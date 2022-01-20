///

exports.isLogin = (request, response, next) => {
  if (request.session.userId) next();
  else response.redirect("/singin");
};
exports.isNotLogin = (request, response, next) => {
  if (!request.session.userId) next();
  else response.redirect("/");
};
