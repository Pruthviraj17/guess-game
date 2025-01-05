const express = require("express");
const path = require("path");

const app = express();

const bodyParser = require("body-parser");

const appRoutes = require("./routes/approutes");

const guessedNumberController = require("./controllers/guess-number-controller.js");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "views")));

app.use("/guessGame", appRoutes);
app.use("/", guessedNumberController.dashBoard);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// http://localhost:3000/guessGame/getNumber
