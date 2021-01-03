const router = require("express").Router();
const db = require("../db");
let eventsList = [];
db.collection("events")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      eventsList.push(doc.data());
    });
  });

router.route("/").get((req, res) => {
  res.json(eventsList);
});

module.exports = router;
