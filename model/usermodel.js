const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mvcCrud");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const User = mongoose.model("User", userSchema);

module.exports = User;
