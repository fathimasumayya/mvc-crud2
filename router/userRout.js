const express = require("express");
const router = express.Router();
const {
  renderHome,
  addUser,
  deleteUser,
  getEdit,
  postEdit,
} = require("../controller/usercontroller");

router.get("/", renderHome);
router.post("/add", addUser);
router.post("/delete", deleteUser);
router.get("/edit/:id", getEdit);
router.post("/edit/:id", postEdit);

module.exports = router;
