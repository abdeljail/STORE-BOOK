const mongoose = require("mongoose");

///

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

exports.getBooks = async (name) => {
  return await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      const category = mongoose.model("categores");
      return category.aggregate([
        {
          $lookup: {
            from: "books",
            localField: "_id",
            foreignField: "categoryId",
            as: "book",
          },
        },
        {
          $match: {
            name: name,
          },
        },
        {
          $project: {
            _id: 0,
            title: "$book.title",
            id: "$book._id",
            image: "$book.image",
          },
        },
      ]);
    })
    .then((books) => {
      mongoose.disconnect();
      return books[0];
    })
    .catch((err) => {});
};
// [
//     {
//       $lookup: {
//         from: "books",
//         localField: "_id",
//         foreignField: "categoryId",
//         as: "book",
//       },
//     },
//     {
//       $match: {
//         _id: ObjectId('61f1d2c4e364b718a3ff4bc9')
//       },
//     },
//   ]
