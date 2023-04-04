// Buoc 1: Lấy ra danh sách slide và đặt một slide mặc định hiển thị

const slideElement = document.getElementsByClassName("slide");
console.log(slideElement[0]);
let currentIndex = 0;
slideElement[currentIndex].style.display = "block";

// Buoc 2: Tao ra function next va preview

function next() {
  slideElement[currentIndex].style.display = "none";
  currentIndex++;
  if (currentIndex > slideElement.length - 1) {
    currentIndex = 0;
  }
  slideElement[currentIndex].style.display = "block";
}
function preview() {
  slideElement[currentIndex].style.display = "none";
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideElement.length - 1;
  }
  slideElement[currentIndex].style.display = "block";
}

// Buoc 3: Autoplay

var myShow = setInterval(next, 3000);

// Buoc 4: Tao ra tinh nang pause/play

const pauseElement = document.getElementById("pause");

console.log(pauseElement);

var myStatus = true;

function pauseShow() {
  pauseElement.innerText = "Play";
  myStatus = false;
  clearInterval(myShow);
}
function playShow() {
  pauseElement.innerText = "Pause";
  myStatus = true;
  setInterval(next, 3000);
}

pauseElement.onclick = function () {
  if (!myStatus) {
    pauseShow();
  } else {
    playShow();
  }
};
