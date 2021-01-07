const router = require("express").Router();
const admin = require("firebase-admin");

const db = require("../db");
const staticConfig = require("../staticConfig");

const moment = require("moment-timezone");
moment.tz.setDefault(staticConfig.timezone);

router.route("/").post((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("New appointment added");
  const reqDateTime = moment.utc(req.body.reqDateTime).toDate();
  const reqDuration = parseInt(req.body.reqDuration);
  console.log(reqDateTime);
  db.collection("events").add({
    dateTime: admin.firestore.Timestamp.fromDate(reqDateTime),
    duration: reqDuration,
  });
});

module.exports = router;
