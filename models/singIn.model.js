const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

///

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

const User = mongoose.model("users");

exports.loginUser = (user) => {
  // test email
  // if exist (true go to login)
  // (false login user to users collection)
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => User.findOne({ email: user.email }))
      .then((s) => {
        mongoose.disconnect();
        if (s)
          bcrypt.compare(user.password, s.password).then((verif) => {
            if (verif) resolve(true);
            else reject(false);
          });
        else reject("not found");
      })
      .catch((err) => {
        reject(err);
      });
  });
};
