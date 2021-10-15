const express = require("express");
const date = require(__dirname + "/date.js");

const app = express();

let items = [];
let workItems = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var day = date();
  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {
  var item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/work");
});

app.get("/about", (req, res) => {
  res.render("about", { listTitle: "About" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
