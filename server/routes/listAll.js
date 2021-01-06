const router = require("express").Router();
const db = require("../db");
const staticConfig = require("../staticConfig");
const moment = require("moment-timezone");
moment.tz.setDefault(staticConfig.timezone);

router.route("/").get((req, res) => {
  db.collection("events")
    .get()
    .then((snapshot) => {
      let eventsList = [];
      snapshot.docs.forEach((doc) => {
        eventsList.push(doc.data());
        // console.log(doc.data());
      });
      eventsList.map((event) => {
        event.dateTime = event.dateTime.toDate();
        event.dateTime = moment
          .tz(event.dateTime, staticConfig.timezone)
          .format();
      });
      res.json(eventsList);
    });
});

module.exports = router;
