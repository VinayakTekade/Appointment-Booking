const router = require("express").Router();
const db = require("../db");

router.route("/").get((req, res) => {
  res.send("This page will take post request");
});

// router.route('/add').post((req,res) => {
//
// })

module.exports = router;
