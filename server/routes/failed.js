const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send("App is working");
});

// router.route('/add').post((req,res) => {
//
// })

module.exports = router;
