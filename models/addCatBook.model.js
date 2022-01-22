const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

///

// create schema new users
const cat = mongoose.Schema({
  name: String,
});

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

const Cat = mongoose.model("categores", cat);

exports.addNewCat = (cat) => {
  // test name cat if exist return false
  // not exist name cat return true
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        return Cat.findOne({ name: cat.name });
      })
      .then((c) => {
        if (c) {
          mongoose.disconnect();
          reject(false);
          return;
        }
      })
      .then(() => {
        let c = new Cat({
          name: cat.name,
        });
        return c.save();
      })
      .then((c) => {
        mongoose.disconnect();
        resolve(true);
      })
      .catch((err) => {
        mongoose.disconnect();
        reject("err in db" + "  ===> : " + err);
      });
  });
};
