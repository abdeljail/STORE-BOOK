const mongoose = require("mongoose");
///

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

let Cat = mongoose.model("categores");

///
exports.editCatBook = ({ id, name }) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        return Cat.updateOne({ _id: id }, { name: name });
      })
      .then(() => {
        mongoose.disconnect();
        resolve(true);
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};
