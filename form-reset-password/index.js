// Ngăn chặn hành vi submit mặc định của form
const formElement = document.getElementsByTagName("form")[0];
formElement.onclick = function (event) {
  event.preventDefault();
};
