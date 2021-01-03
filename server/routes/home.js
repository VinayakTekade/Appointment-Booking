const router = require("express").Router();
const admin = require("firebase-admin");
const db = require("../db");

router.route("/").get((req, res) => {
  res.send("This page will take post request");
});

router.route("/freeSlots").post((req, res) => {
  const reqDate = req.query.reqDate;
  const reqTimezone = req.query.reqTimezone;
  let date = new Date(reqDate);
  let usaTimeZone = changeTimezone(date);
  let changedDate = Date.parse(usaTimeZone);
  let changedDatetime = new Date(changedDate);

  console.log(changedDatetime.toUTCString());

  const duration = 30;
  const startDate = new Date("January 1, 2020, 10:00:00").toUTCString();
  const endDate = new Date("January 1, 2020, 18:00:00").toUTCString();
  let start = Date.parse(startDate);
  let end = Date.parse(endDate);

  function changeTimezone(idate) {
    console.log(idate.toUTCString());

    let usaTime = idate.toLocaleString("en-US", {
      timeZone: reqTimezone,
    });
    return usaTime;
  }

  console.log(startDate + "blah");

  let slots = [start];
  while (start < end) {
    start = start + duration * 60 * 1000;
    slots.push(start);
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
  const reqDateTime = req.query.reqDateTime;
  const reqDuration = parseInt(req.query.reqDuration);
  db.collection("events").add({
    dateTime: admin.firestore.Timestamp.fromDate(new Date(reqDateTime)),
    duration: reqDuration,
  });
});

module.exports = router;
