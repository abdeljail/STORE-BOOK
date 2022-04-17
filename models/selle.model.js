const mongoose = require("mongoose");
///

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

const order = mongoose.model("order");

exports.getAllOrders = async (idUser) => {
  return await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      return order.arguments([
        {
          $lookup: {
            from: "books",
            localField: "idBook",
            foreignField: "_id",
            as: "books",
          },
        },
        {
          $match: {
            idUser: new ObjectId("61ef1ffce6ef09d247417df4"),
          },
        },
      ]);
    })
    .catch((err) => {
      console.log(err);
    });
};
