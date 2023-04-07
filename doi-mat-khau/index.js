// B1: Xu ly hanh vi mac dinh cua form
const fromElement = document.getElementById("form");
form.onclick = function (event) {
  event.preventDefault();
};

const passwordOldValue = "123123";

// B2: Lay ra ca element can thiet
const passwordOld = document.getElementById("passwordOld");
const passwordNew = document.getElementById("passwordNew");
const passwordConfirm = document.getElementById("passwordConfirm");

const validOldPass = document.getElementById("valid-oldpass");
const validNewPass = document.getElementById("valid-newpass");
const validConfirmPass = document.getElementById("valid-confirmpass");

function valid() {
  let status1 = false;
  let status2 = false;
  let status3 = false;
  if (passwordOld.value !== passwordOldValue) {
    // console.log("Mật khẩu cũ không đúng!");
    validOldPass.innerText = "Mật khẩu cũ không đúng!";
    status1 = false;
  } else {
    // console.log("Mật khẩu cũ không đúng!");
    validOldPass.innerText = "";

    status1 = true;
  }
  if (passwordNew.value.trim().length < 6) {
    // console.log("Mật khẩu phải có ít nhất 6 ký tự!");
    validNewPass.innerText = "Mật khẩu phải có ít nhất 6 ký tự!";
    status2 = false;
  } else {
    // console.log("Mật khẩu phải có ít nhất 6 ký tự!");
    validNewPass.innerText = "";
    status2 = true;
  }
  if (passwordConfirm.value.trim() !== passwordNew.value.trim()) {
    // console.log("Nhập lại mật khẩu không khớp!");
    validConfirmPass.innerText = "Nhập lại mật khẩu không khớp!";
    status3 = false;
  } else {
    // console.log("Nhập lại mật khẩu không khớp!");
    validConfirmPass.innerText = "";
    status3 = true;
  }
  return status1 && status2 && status3;
}
function send() {
  if (valid()) {
    const resetPassword = {};
    resetPassword.passwordNew = passwordNew.value;
    console.log(resetPassword);
  }
}
