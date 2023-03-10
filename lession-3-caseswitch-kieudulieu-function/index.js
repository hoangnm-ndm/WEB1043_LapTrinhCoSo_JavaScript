// const yourAnswer = prompt("Ban co muon di hoc khong?");
// const newAnswer = prompt("Ban co muon o lại trang web nay khong?");
// const studentAnswer = confirm("Ban co muon hoc thay khong?");
// console.log(studentAnswer);
// studentAnser nhận kiểu dữ liệu là boolean

// confirm()
/**
 * Kiêủ dữ liệu nguyên thuỷ trong JS (tham trị):
 * 1. Number
 * 2. String
 * 3. BigInt
 * 4. Boolean (true/false)
 * 5. Symbol
 * 6. Null
 * 7. Undefined
 *
 * Kiểu dữ liệu phức tạp (tham chiếu):
 * 1. Array
 * 2. Object
 */

/**
 * Dùng prompt để nhập vào 2 số a, b là chiều dài 2 cạnh góc vuộng, in ra chiều dài cạnh huyền.
 *
 * Math.sqrt()
 */

// const canh1 = prompt("Nhap vao canh goc vuong thu nhat");
// const canh2 = prompt("Nhap vao canh goc vuong thu hai");

// console.log("Gia tri cua canh huyen la: ", Math.sqrt(canh1 ** 2 + canh2 ** 2));

/**
 * If (menh de luan ly) {//logic can xu ly}
 * If (menh de luan ly) {//logic can xu ly} else {//logic can xu ly}
 * If (menh de luan ly) {//logic can xu ly} else if(menh de luan ly 2) {//logic can xu ly} else {// logic can xu ly}
 */

// var myNumber = 200;
// console.log(myNumber % 2);
// console.log(object)
/** Nhap vao 1 so bat ky, kiem tra xem co phai la số chẵn hay khong? */

// var testNumber = promt("Moi nhap vao 1 so:");
// if (testNumber % 2 === 0) {
//   console.log(`${testNumber} là một số chẵn`);
// } else console.log(`${testNumber} không là một số chẵn`);

function testNumber(a) {
  if (a % 2 === 0) {
    console.log(`${a} là một số chẵn`);
  } else console.log(`${a} không là một số chẵn`);
}
testNumber(100);
testNumber(102);
testNumber(1902323233454);
testNumber(123456789054678);
