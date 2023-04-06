const myForm = document.getElementById("register");

myForm.onclick = function (event) {
  event.preventDefault();
};

const usernameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const validUsername = document.getElementById("valid-username");
const validPassword = document.getElementById("valid-password");

function valid(username, password) {
  let status1 = false;
  let status2 = false;
  if (username.trim().length < 8) {
    // console.log("username phai co it nhat 8 ky tu");
    validUsername.innerText = "Username phải có ít nhất 8 ký tự!";
    status1 = false;
  } else {
    validUsername.innerText = "";
    status1 = true;
  }
  if (password.trim().length < 6) {
    // console.log("username phai co it nhat 8 ky tu");
    validPassword.innerText = "Password phải có ít nhất 6 ký tự!";
    status2 = false;
  } else {
    validPassword.innerText = "";
    status2 = true;
  }
  return status1 && status2;
}

function send() {
  if (valid(usernameElement.value, passwordElement.value)) {
    // Gui du lieu cua nguoi dung di
    const user = {};
    user.username = usernameElement.value;
    user.email = emailElement.value;
    user.password = passwordElement.value;
    console.log("user: ", user);
  }
}
