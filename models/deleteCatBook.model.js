const mongoose = require("mongoose");

///

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

const Cat = mongoose.model("categores");

exports.deleteCatBook = (idCat) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        return Cat.deleteOne({ _id: idCat });
      })
      .then((cat) => {
        console.log(cat);
        mongoose.disconnect();
        reject(true);
      })
      .catch((err) => {
        mongoose.disconnect();
        reject("err in db" + "  ===> : " + err);
      });
  });
};
