const bodyElement = document.getElementsByTagName("body")[0];
function darkMode() {
  bodyElement.style.color = "#ccc";
  bodyElement.style.backgroundColor = "black";
}

const btnDarkElement = document.getElementById("btn-dark");

function changeTheme() {
  bodyElement.classList.toggle("darkTheme");
  btnDarkElement.classList.toggle("btn-dark");
}

// B1: Setting -> auto save -> onWindowChange
// B2: Setting -> format on save
// B3: Extension -> Prettier - Code Formatter
// B4: Setting -> Default Formatter -> Prettier
