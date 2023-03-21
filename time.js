setInterval(timehandler, 1000);

function timehandler() {
  let elem = document.getElementById("time");
  let newdate = new Date();
  elem.innerText = newdate.toLocaleString();
}
