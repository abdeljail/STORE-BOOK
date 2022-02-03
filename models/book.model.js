const mongoose = require("mongoose");

///

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

exports.getbook = async (id) => {
  return await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      const categores = mongoose.model("books");
      return categores.find({ _id: id });
    })
    .then((cats) => {
      mongoose.disconnect();
      return cats;
    })
    .catch((err) => {});
};
