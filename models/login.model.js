const mongoose = require("mongoose");

///

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

// create schema new admins
const schemaAdmin = mongoose.Schema({
  full_name: String,
  email: String,
  password: String,
  Src_Img: String,
});

const Admin = mongoose.model("admins", schemaAdmin);

exports.login = (admin) => {
  // test email
  // if exist (true go to login)
  // (false login user to users collection)
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => Admin.findOne({ email: admin.email }))
      .then((a) => {
        mongoose.disconnect();
        if (a) {
          //   bcrypt.compare(user.password, s.password).then((verif) => {
          if (admin.password === a.password) {
            resolve({
              _user: a,
              message: true,
            });
          } else reject(false);
          //   });
        } else reject("not found");
      })
      .catch((err) => {
        reject(err);
      });
  });
};
