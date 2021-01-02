const router = require("express").Router();
const db = require("../db");

router.route("/").get((req, res) => {
  db.collection("events")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      });
    });
  res.send("Check console for all the appointments");
});

// router.route('/add').post((req,res) => {
//
// })

module.exports = router;
