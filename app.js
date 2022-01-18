const express = require("express");
const path = require("path");
const morgan = require("morgan");

const singUp = require("./routers/singUp.router");
const home = require("./routers/home.router");

const app = express();
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

app.use("/", singUp);

///

app.use("/", home);

///

app.listen(port, () => {
  console.log(nodeEnv);
  console.log(`app listening at http://localhost:${port}`);
});
