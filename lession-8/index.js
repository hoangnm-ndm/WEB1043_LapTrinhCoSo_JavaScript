// console.log("Bai 8");
// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availWidth);
// console.log(screen.availHeight);

// window.open(
//   "http://www.google.com.vn/",
//   "timkiem",
//   "menubar = yes, width = 800, height = 600"
// );

// document.write("version: " + navigator.version + "<br>");
// document.write("cookieEnabled: " + navigator.cookieEnabled);

// document.write("host: " + location.host + "<br>");
// document.write("hostname: " + location.hostname + "<br>");
// document.write("href: " + location.href + "<br>");
// document.write("pathname: " + location.pathname + "<br>");
// document.write("port: " + location.port + "<br>");
// document.write("protocol: " + location.protocol + "<br>");

console.log("Công việc 1");
const myInterval = setInterval(function () {
  console.log("Công việc 2");
}, 1000);
console.log("Công việc 3");
function donDep() {
  clearInterval(myInterval);
}

// clearInterval(abc);

// var now = new Date();
// var h = now.getHours();
// var m = now.getMinutes();
// var s = now.getSeconds();
// document.write(`${h}:${m}:${s}`);
// setTimeout(function () {
//   location.reload();
// }, 1000);
