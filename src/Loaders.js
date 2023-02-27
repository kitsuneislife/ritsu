const chalk = require("cli-color");
const fs = require("fs");

module.exports.load = async () => {
  try {
    const express = require("express");
    const expressSession = require("express-session");
    const app = express();
    app.listen(8000, () => {
      console.log(chalk.green("App..................................Ready"));
    });

    app.use(express.static("./src/App"));
    app.set("views", "./src/App/Views");
    app.set("view engine", "ejs");
    app.use(express.urlencoded({ extended: true }));
    app.use(
      expressSession({
        secret: process.env.sessionKey,
        resave: false,
        saveUninitialized: false,
      })
    );

    app.get("/", async (req, res) => {
      res.render("login", {});
    });

  } catch (e) {
    const now = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo", hour12: false });
    fs.writeFileSync(`./src/Logs/SystemLogs/${now}.txt`, e.toString());

    console.log(chalk.red("LOADING FAILED..."));
    console.log(chalk.red("This incident will be reported."));
    console.log(chalk.red("=========================================="));
    process.exit(1);
  }
}