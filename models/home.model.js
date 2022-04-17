const mongoose = require("mongoose");

///

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

exports.getLimitBooks = async (id,limit) => {
  return await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      const categores = mongoose.model("books");
      return categores
        .find({ categoryId: id }, { title: 1, image: 1 })
        .limit(limit);
    })
    .then((cats) => {
      mongoose.disconnect();
      return cats;
    })
    .catch((err) => {});
};

// exports.getLimitBooks = async ([a, b]) => {
//   return [
//     await fun(a).then((res) => {
//       console.log("-----------------------");
//       console.log(res)
//       console.log("-----------------------");
//       return res;
//     }),
//     await fun(b).then((res) => {
//       console.log("**********************");
//       console.log(res);
//       console.log("***********************");
//       return res;
//     }),
//   ];
// };
// .aggregate([
//   {
//     $lookup: {
//       from: "categores",
//       localField: "categoryId",
//       foreignField: "_id",
//       as: "book",

//     },
//   },
//   {
//     $project: {
//       _id: 1,
//       title: 1,
//       img: 1,
//       price: 1,
//       Author: 1,
//     },
//   },
//   {
//     :"categoryId",
//   }
// ]);
