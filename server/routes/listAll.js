const router = require("express").Router();
const db = require("../db");

router.route("/").get((req, res) => {
  db.collection("events")
    .get()
    .then((snapshot) => {
      let eventsList = [];
      snapshot.docs.forEach((doc) => {
        eventsList.push(doc.data());
        console.log(doc.data());
      });
      eventsList.map((event) => {
        event.dateTime = event.dateTime.toDate();
      });
      res.json(eventsList);
    });
});

module.exports = router;
