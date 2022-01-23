const mongoose = require("mongoose");

///

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

const Cats = mongoose.model("categores");

exports.getAllCatBook = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => Cats.find())
      .then((cats) => {
        mongoose.disconnect();
        resolve(cats);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
