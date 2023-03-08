let passwordUser = "123";

// if (passwordUser.length < 8) {
//   console.warn("Password phải có độ dài tối thiểu là 8 ký tự!");
// }

// thi lai: <5
// trung binh: 5- 6
// kha: >=6- <7
// gioi >=7-10

let DTB = 6;

// if (DTB < 5) {
//   console.log("Thi lai!");
// } else if (DTB >= 5 && DTB < 6) {
//   console.log("Trung binh!");
// } else if (DTB >= 6 && DTB < 7) {
//   console.log("Kha!");
// } else {
//   console.log("Gioi!");
// }

let today = "Web";
// switch (today) {
//   case "Sat":
//   case "Sun":
//     console.log(" Hom nay la cuoi tuan!");
//     break;
//   default:
//     console.log("Hom nay la ngay trong tuan");
// }

let myNumber = "string";

// switch (myNumber % 2) {
//   case 0:
//     console.log(`${myNumber} la mot so chan`);
//     break;
//   default:
//     console.log(`${myNumber} khong la mot so chan`);
// }

// if (myNumber % 2 == 0) {
//   console.log(`${myNumber} la mot so chan`);
// } else {
//   console.log(`${myNumber} khong la mot so chan`);
// }

// console.log(5 % 2);

let lastName = "Nguyen";
let firstName = "Hieu";
let fullName = firstName + " " + lastName;
let fullName2 = firstName.concat(" ", lastName);
let fullName3 = `${firstName} \t ${lastName}`; //tickback
// console.log(fullName);
// console.log(fullName2);
// console.log(fullName3);

// var x = "Toi la String.";
// alert(x.substring(7, 13));
// prompt();
// let age = prompt("ban bao nhieu tuoi: ");
// console.log("age: ", age);
// let myBolean = confirm("3 có lớn hơn 2 không?");
// console.log(myBolean);
// confirm();
// console.log("Hello");

let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);

const myStudents = ["Chi", "Hieu", "Khoa", "Thang"];

console.log(myStudents);

console.log(myStudents[0]);
console.log("Bàn đầu có số lượng sinh viên là: ", myStudents.length);

myStudents.push("Hoang");
console.log(myStudents);
myStudents[-1] = "Something";
console.log(myStudents[-1]);
console.log(myStudents.indexOf("Cuong"));

/**
 * Các toán tử số học:
 *  +, - , *, /, %, **, ++, --
 */

let i = 1;
console.log(++i); // thuc hien phep tinh truoc khi gan ket qua
console.log(i++); // thuc hien phep tinh sau khi gan.

let h = 10;
let f = 20;
f += h; // f = f + h (+=, -=, *=, /=, %=....)
console.log(f);
console.log(Math.floor(Math.random() * 10));
Math.floor(); // Làm tròn xuống
Math.ceil(); // Làm tròn lên
Math.trunc(); // Cắt đi phần sau dấu ,
Math.round(); // Làm tròn đến số nguyên gần nhất
console.log(Math.PI);

// prompt();
/**
 * Hãy dùng prompt để nhập vào 2 số a, b là chiều dài cạnh góc vuông của 1 tam giác,
 * Console.log ra chiều dài cạnh huyền.
 */
