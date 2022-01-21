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

app.use(express.json({ limit: "1kb" }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "admin/")));
app.use(express.static(path.join(__dirname, "uploads")));
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "/admin/views"),
]);
app.set("view engine", "pug");

///

// include the rounting pages

const home = require("./routers/home.router");
const singUp = require("./routers/singUp.router");
const singIn = require("./routers/singIn.router");
const logOut = require("./routers/logOut.router");

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

/// start pages the clients

///

app.use("/", home);

///

app.use("/", singUp);

///

///

app.use("/", singIn);

///

///

app.use("/", logOut);

///

/// end pages the clients

/// start pages the admins

app.get("/data", (request, response, next) => {
  console.log(path.join(__dirname, "admin/public"));
  response.render("login", {
    namePage: "admin",
    srcLinkCss:"public/css/style.css"
  });
});

/// end pages the admins

app.get("*", (request, response, next) => {
  response.render("errors/err404", {
    namePage: "not found ",
    statute: "error 404",
  });
});

app.listen(port, () => {
  console.log(nodeEnv);
  console.log(`app listening at http://localhost:${port}`);
});
