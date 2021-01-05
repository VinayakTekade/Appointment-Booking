const router = require("express").Router();
const admin = require("firebase-admin");
const db = require("../db");
const staticConfig = require("../staticConfig");

let occupiedSlots = [];

function changeTimezone(idate, timezone) {
  let Timestamp = idate.toLocaleString("en-US", {
    timeZone: timezone,
  });
  return Date.parse(Timestamp);
}

router.route("/").get((req, res) => {
  res.send("This page will take post request");
});

router.route("/freeSlots").post((req, res) => {
  const reqDate = req.body.reqDate;
  const reqTimezone = req.body.reqTimezone;

  let start = new Date(staticConfig.startHours);
  let end = new Date(staticConfig.endHours);
  let changedStart = changeTimezone(start, reqTimezone);
  let changedEnd = changeTimezone(end, reqTimezone);

  // db.collection("events")
  //   .where("dateTime", "==", "admin.firestore.Timestamp.fromDate(reqDateTime)")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       occupiedSlots.push(doc.data());
  //     });
  //   });

  let slots = [changedStart];
  while (changedStart < changedEnd) {
    changedStart = changedStart + staticConfig.duration * 60 * 1000;
    slots.push(changedStart);
  }

  let finalSlots = [];
  slots.forEach((element) => {
    let i = new Date(element);
    finalSlots.push(i);
  });
  res.json(finalSlots);
});

router.route("/createEvent").post((req, res) => {
  res.send("New appointment added");
  const reqDateTime = new Date(req.body.reqDateTime);
  const reqDuration = parseInt(req.body.reqDuration);
  const convDate = new Date(changeTimezone(reqDateTime, "Europe/London"));
  console.log(convDate);
  db.collection("events").add({
    dateTime: admin.firestore.Timestamp.fromDate(convDate),
    duration: reqDuration,
  });
});

module.exports = router;
