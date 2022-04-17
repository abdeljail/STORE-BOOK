const mongoose = require("mongoose");

let schemaBook = mongoose.Schema({
  title: String,
  description: String,
  Author: String,
  price: Number,
  numberPage: Number,
  image: String,
  categoryId: mongoose.ObjectId,
});
// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

const Book = mongoose.model("books", schemaBook);

exports.responseAddBook = ({
  title,
  descreption,
  name,
  price,
  number,
  img,
  select,
}) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        let book = new Book({
          title: title,
          description: descreption,
          Author: name,
          price: price,
          numberPage: number,
          image: img,
          categoryId: select,
        });
        return book.save();
      })
      .then(() => {
        mongoose.disconnect();
        resolve("added!");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};

exports.getAllcategories = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        const Cats = mongoose.model("categores");
        return Cats.find();
      })
      .then((cats) => {
        mongoose.disconnect();
        resolve(cats);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
