const express = require("express");
const router = express.Router();
const signUpPage = require("../model/model");

router.post("/sign-up", (req, res) => {
  const user = new signUpPage({
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/sign-in");
module.exports = router;
