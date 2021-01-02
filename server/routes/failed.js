const router = require("express").Router();
const db = require("../db");

router.route("/").get((req, res) => {
  res.send("If Appointment failed");
});

// router.route('/add').post((req,res) => {
//
// })

module.exports = router;
