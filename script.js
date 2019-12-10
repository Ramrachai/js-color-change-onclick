var colorBtn = document.querySelector(".colorBtn"); //Select Button
var body = document.querySelector("body"); //Select body tag
colors = [
  "#0061BF",
  "#013183",
  "#FD7D00",
  "#E7B901",
  "#F2FB7A",
  "#05445E",
  "#189AB4",
  "#75E6DA"
]; // list of colors
colorBtn.addEventListener("click", colorChange);
function colorChange() {
  var r = Math.floor(Math.random() * colors.length);
  body.style.background = colors[r];
}
