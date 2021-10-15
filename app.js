const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var date = new Date();
  var dayIndex = date.getDay();
  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = dayList[dayIndex];

  res.render("list", { kindOfDay: day });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
