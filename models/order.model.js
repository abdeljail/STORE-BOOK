const mongoose = require("mongoose");
///

// create schema new Orders
const schemaOrder = mongoose.Schema({
  idUser: mongoose.ObjectId,
  idBook: mongoose.ObjectId,
  date: mongoose.Schema.Types.Date,
});

// create url connect db
const url = "mongodb://localhost:27017/STOREBOOKS";

const Order = mongoose.model("order", schemaOrder);

exports.addNweOrder = async ({ idUser, idBook }) => {
  return await new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        return Order.findOne({ idUser: idUser, idBook: idBook });
      })
      .then((o) => {
        if (o) {
          mongoose.disconnect();
          reject(false);
          return;
        }
        return o;
      })
      .then(() => {
        let o = new Order({
          idUser: idUser,
          idBook: idBook,
          date: new Date(),
        });
        return o.save();
      })
      .then((o) => {
        mongoose.disconnect();
        resolve(true);
      })
      .catch((err) => {
        mongoose.disconnect();
        reject("err in db" + "  ===> : " + err);
      });
  });
};
