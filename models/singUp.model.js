const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { promise, reject } = require("bcrypt/promises");

///

// create schema new users
const schemaUser = mongoose.Schema({
  First_Name: String,
  Last_Name: String,
  email: String,
  password: String,
});

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

const User = mongoose.model("users", schemaUser);

exports.addNweUser = (user) => {
  // test email if exist (true go to login) (false add this user to users collection)
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        return User.findOne({ email: user.email });
      })
      .then((s) => {
        if (s) {
          mongoose.disconnect();
          reject(false);
          return;
        }
        return bcrypt.hash(user.password, 10);
      })
      .then((hashPassord) => {
        let s = new User({
          First_Name: user.First_Name,
          Last_Name: user.Last_Name,
          email: user.email,
          password: hashPassord,
        });
        return s.save();
      })
      .then((s) => {
        mongoose.disconnect();
        resolve(true);
      })
      .catch((err) => {
        mongoose.disconnect();
        reject("err in db" + "  ===> : " + err);
      });
  });
};

// return new Promise((resolve, reject) => {
//   mongoose
//     .connect(url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       return modelUser.findOne({ email: user.email });
//     })
//     .then((user) => {
//       if (user) {
//         mongoose.disconnect();
//         reject("user is found");
//         return;
//       }
//       return bcrypt.hash(user.password, 100);
//     })
//     .then((hashPassord) => {
//       let user = new modelUser({
//         First_Name: user.First_Name,
//         Last_Name: user.Last_Name,
//         email: user.email,
//         password: hashPassord,
//       });
//       user.save();
//     })
//     .then((user) => {
//       mongoose.disconnect();
//       resolve("seccess");
//     })
//     .catch((err) => {
//       mongoose.disconnect();
//       reject("err in db");
//     });
// });
