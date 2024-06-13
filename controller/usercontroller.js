const User = require("../model/usermodel");
const renderHome = (req, res) => {
  User.find().then((users) => {
    res.render("index", { users: users });
  });
};

const addUser = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    age: req.body.age,
  });
  newUser
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.body.id)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

const getEdit = (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.render("edit", { user: user });
  });
};
const postEdit = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

module.exports = { postEdit, getEdit, renderHome, addUser, deleteUser };
