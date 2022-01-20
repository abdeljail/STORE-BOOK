// create function logout client

exports.getLogOut = (request, response, next) => {
  request.session.destroy(() =>
    response.json({
      message: true,
    })
  );
};

///
