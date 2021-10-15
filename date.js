module.exports = getDate;

function getDate() {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };

  var day = today.toLocaleDateString("en-US", options);
  return day;
}
