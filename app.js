const express = require("express");

const app = express();

var items = [];

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newItem: items });
});

app.post("/", (req, res) => {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
  console.log(items);
  console.log(item);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
