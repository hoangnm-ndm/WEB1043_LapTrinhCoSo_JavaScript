let currentIndex = 0;
const slideList = document.getElementsByClassName("slide");
slideList[currentIndex].style.display = "block";

function preview() {
  slideList[currentIndex].style.display = "none";

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideList.length - 1;
  }
  slideList[currentIndex].style.display = "block";
}
function next() {
  slideList[currentIndex].style.display = "none";

  currentIndex++;
  if (currentIndex > slideList.length - 1) {
    currentIndex = 0;
  }
  slideList[currentIndex].style.display = "block";
}

var playing = true;
var pauseButton = document.getElementById("pause");
var slideInterval = setInterval(next, 2000);

function pauseSlideshow() {
  pauseButton.innerHTML = "Play";
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = "Pause";
  playing = true;
  slideInterval = setInterval(next, 2000);
}

pauseButton.onclick = function () {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};
