// Ham kiem tra 1 so chan

// if (myNumber % 2 == 0) {
//   console.log(`${myNumber} la mot so chan`);
// } else {
//   console.log(`${myNumber} khong la mot so chan`);
// }
function kiemTraSoChan(number) {
  if (number % 2 == 0) {
    // console.log(`${number} la mot so chan`);
    return true;
  } else {
    // console.log(`${number} khong la mot so chan`);
    return false;
  }
}

// kiemTraSoChan(10);
// kiemTraSoChan(20);
// kiemTraSoChan(101);
// kiemTraSoChan(13131);

// console.log(kiemTraSoChan(10));

// if (kiemTraSoChan(10) === true) {
//   console.log(`day la 1 so chan`);
// }

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 11));
// console.log(sum(20, 30));
// console.log(sum(10, 100));

// const yourAnswer = prompt("Cac ban co muon di hoc khong?");
// console.log("yourAnswer: ", yourAnswer);

// const yourAnswer = confirm("Cac ban co muon di hoc khong?");
// return value của hàm confirm luôn là dạng boolean
// console.log("yourAnswer: ", yourAnswer);

const a = "Chi";
const b = "Hieu";

const myStudent = ["Chi", "Hieu", 1234, 12343, 3456];
// console.log(myStudent.length);

function tinhCanhHuyen(canh1, canh2) {
  let canhHuyen = Math.sqrt(canh1 ** 2 + canh2 ** 2);
  return canhHuyen;
}

console.log(tinhCanhHuyen(3, 4));
console.log(tinhCanhHuyen(5, 6));
console.log(tinhCanhHuyen(9, 7));
console.log(tinhCanhHuyen(100, 200));

/**
 * Tinh tien dien cua mot gia dinh co ten la "name" biet rang:
 * 1. 50 số điện đầu tiên có giá 1000vnd
 * 2. 25 số điện tiếp theo có giá 1200vnd
 * 3. 25 số điện tiếp theo có giá 1500vnd
 * 4. các số điện từ 101 tính giá 2000vnd
 * 5. Viết bài toán dưới dạng function
 */

function tinhTienDien(name, soDien) {
  let tienDien;
  if (soDien <= 50) {
    tienDien = soDien * 1000;
  } else if (soDien <= 75 && soDien > 50) {
    tienDien = 50 * 1000 + (soDien - 50) * 1200;
  } else if (soDien <= 100 && soDien > 75) {
    tienDien = 50 * 1000 + 25 * 1200 + (soDien - 75) * 1500;
  } else {
    tienDien = 50 * 1000 + 25 * 1200 + 25 * 1500 + (soDien - 100) * 2000;
  }
  console.log(`Gia dinh ${name} phai dong so tien dien la: ${tienDien}`);
}
