const express = require("express");
const path = require("path");
const userRoute = require("./router/userRout");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", userRoute);

app.listen(3000, () =>
  console.log("Server started on port http://localhost:3000")
);
