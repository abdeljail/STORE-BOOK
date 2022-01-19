const express = require("express");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);

const app = express();

const store = new MongoDBStore({
  uri: "mongodb://localhost:27017/STOREBOOKS",
  collection: "mySessions",
});

app.use(
  session({
    secret: "This is a secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

///

// include the rounting pages

const home = require("./routers/home.router");
const singUp = require("./routers/singUp.router");
const singIn = require("./routers/singIn.router");

///

app.use(express.json({ limit: "1kb" }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

///

const nodeEnv = app.get("env");

const port = 3000;

if (app.get("env") === "development") {
  app.use(
    morgan({
      format: "dev",
      skip(req, res) {
        return res.statusCode === 304;
      },
    })
  );
}

///

app.use("/", home);

///

app.use("/", singUp);

///

///

app.use("/", singIn);

///

app.listen(port, () => {
  console.log(nodeEnv);
  console.log(`app listening at http://localhost:${port}`);
});
