const router = require("express").Router();
const admin = require("firebase-admin");

const db = require("../db");
const staticConfig = require("../staticConfig");

const moment = require("moment-timezone");
moment.tz.setDefault(staticConfig.timezone);

// let occupiedSlots = [];

router.route("/").post((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // let reqDate = req.query.reqDate;
  // reqDate = moment(reqDate).format();
  // reqDate = new Date(reqDate);
  // reqDate = admin.firestore.Timestamp.fromDate(reqDate);
  // reqEndDate = moment(req.query.reqDate).add(1, "days").format();
  // reqEndDate = new Date(reqEndDate);
  // reqEndDate = admin.firestore.Timestamp.fromDate(reqEndDate);
  const reqTimezone = req.body.reqTimezone;
  console.log(reqTimezone);

  let start = moment(staticConfig.startHours, "HH:mm");
  let end = moment(staticConfig.endHours, "HH:mm");

  let changedStart = moment.tz(start, reqTimezone);
  let changedEnd = moment.tz(end, reqTimezone);

  // db.collection("events")
  //   .where("dateTime", ">", reqDate)
  //   .where("dateTime", "<", reqEndDate)
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       console.log(doc.data().dateTime.toDate());
  //       occupiedSlots.push(Date(doc.data().DateTime));
  //     });
  //   });
  // console.log(occupiedSlots);

  // console.log(start);
  // console.log(changedStart);

  let slots = [moment(changedStart)];
  while (moment(changedStart) < moment(changedEnd)) {
    changedStart = moment(changedStart).add(staticConfig.duration, "minutes");
    slots.push(moment(changedStart));
  }
  console.log(slots);

  res.send(slots);
});

module.exports = router;
