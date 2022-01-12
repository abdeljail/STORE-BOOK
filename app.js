const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();

///

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
  //
}

app.get("/", (req, res, next) => {
  res.render("home", {srcLinkCss:"./css/style.css",namePage:"home"});
});

app.listen(port, () => {
  console.log(nodeEnv);
  console.log(`app listening at http://localhost:${port}`);
});
