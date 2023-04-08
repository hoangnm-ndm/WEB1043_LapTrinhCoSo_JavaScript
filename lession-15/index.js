const testName = document.getElementsByName("test");
// console.log(testName[0].value);
// console.log(testName[1].value);
// console.log(testName[2].value);
// console.log(testName[3].value);
// console.log(testName[0].checked);

// console.log(1, 2, "hello");
// function welcomeHere(...agrs) {
//   console.log(agrs[3]);
// }
// welcomeHere(1, 2, 3, 4);

function sum(...agrs) {
  let tong = 0;
  for (let i = 0; i < agrs.length; i++) {
    tong = tong + agrs[i];
    // console.log(agrs[i]);
  }
  return tong;
}

console.log(sum(1, 3, 4, 5));
