/**
 * 1. Kiem tra xem username >= 8 ky tu
 * 2. Kiem tra xem password >= 6 ky tu
 * 3. Sau khi kiem tra xong thi lay thong tin cua nguoi dung luu vao trong object user = {}
 */

// B1: Lay ra nhung node can thiet:
const usernameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const validUsernameElement = document.getElementById("validUsername");
const validPasswordElement = document.getElementById("validPassword");

// B2: Kiem tra du lieu cua nguoi dung nhap vao:
function valid(username, password) {
  let status1 = false;
  let status2 = false;
  if (username.length < 8) {
    validUsernameElement.innerText = "Username phai co it nhat 8 ky tu!";
    status1 = false;
  } else {
    validUsernameElement.innerText = "";
    status1 = true;
  }

  if (password.length < 6) {
    validPasswordElement.innerText = "Password phai co it nhat 6 ky tu!";
    status2 = false;
  } else {
    validPasswordElement.innerText = "";
    status2 = true;
  }
  return status1 && status2;
}

// B3: Tao function thuc hien hanh dong onclick
function send() {
  const user = {};
  if (valid(usernameElement.value, passwordElement.value)) {
    user.username = usernameElement.value;
    user.email = emailElement.value;
    user.password = passwordElement.value;
    console.log(user);
  }
}
