const router = require("express").Router();
const admin = require("firebase-admin");

const db = require("../db");
const staticConfig = require("../staticConfig");

const moment = require("moment-timezone");
moment.tz.setDefault(staticConfig.timezone);

let occupiedSlots = [];

router.route("/freeSlots").post((req, res) => {
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

  console.log(start);
  console.log(end);
  console.log(changedStart);
  console.log(changedEnd);
  console.log("----------------------");

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

router.route("/createEvent").post((req, res) => {
  res.send("New appointment added");
  const reqDateTime = moment.utc(req.body.reqDateTime).toDate();
  const reqDuration = parseInt(req.body.reqDuration);
  // const convDate = new Date(changeTimezone(reqDateTime, "Europe/London"));
  console.log(reqDateTime);
  db.collection("events").add({
    dateTime: admin.firestore.Timestamp.fromDate(reqDateTime),
    duration: reqDuration,
  });
});

module.exports = router;
