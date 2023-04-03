let currentIndex = 0;
const slideList = document.getElementsByClassName("slide");
slideList[currentIndex].style.display = "block";

function preview() {
  // for (let i = 0; i < slideList.length; i++) {
  //   slideList[i].style.display = "none";
  // }
  slideList[currentIndex].style.display = "none";

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideList.length - 1;
  }
  slideList[currentIndex].style.display = "block";
}
function next() {
  // for (let i = 0; i < slideList.length; i++) {
  //   slideList[i].style.display = "none";
  // }
  slideList[currentIndex].style.display = "none";

  currentIndex++;
  if (currentIndex > slideList.length - 1) {
    currentIndex = 0;
  }
  slideList[currentIndex].style.display = "block";
}

// function actionSlide() {}

// function play() {
//   const showInterval = setInterval(next, 3000);
// }

// function pause() {
//   clearInterval(next);
// }
