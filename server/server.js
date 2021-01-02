const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const snapshot = await db.collection("events").get();
// snapshot.forEach((doc) => {
//   console.log(doc.id, "=>", doc.data());
// });

const homeRouter = require("./routes/home");
const failedRouter = require("./routes/failed");
const listAllRouter = require("./routes/listAll");
const sucessfulRouter = require("./routes/sucessful");

app.use("/", homeRouter);
app.use("/failed", failedRouter);
app.use("/sucessful", sucessfulRouter);
app.use("/listAll", listAllRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
