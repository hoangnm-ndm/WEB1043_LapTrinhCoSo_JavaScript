/**
 * BTVN:
 * Từ form đã cho, khi ấn nút "Send" thì in ra màn hình console.log({username: "", email: "", password: ""})
 * VD:
 */

const user = document.getElementsByTagName("input");
// for (i = 0; i < user.length; i++) {
//   user.getElementById(password);
// }

function send(e) {
  console.log(e.target);
}
