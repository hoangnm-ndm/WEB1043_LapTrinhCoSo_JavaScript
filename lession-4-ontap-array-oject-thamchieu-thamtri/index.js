// const myStudent = ["Chi", "Hieu", "Khoa", "Thang"];
// console.log(myStudent.push("Nam"));
// console.log(myStudent);
// myStudent[-1] = "Obama";
// console.log(myStudent[-1]);
// console.log(myStudent.indexOf("Donal Trump"));
// myStudent.shift();
// myStudent.unshift("Obama");
// myStudent.pop();

// const myArray = [1, 2, 3, 4, 5];

// // const newArray = myArray.slice(0);
// // console.log(myArray);
// // console.log(newArray);

// myArray.splice(1, 2, 100);
// // splice(start, deleteCount, item1, item2... itemN);

// console.log(myArray);

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, "May");
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// const arrayA = [1, 2, 3];
// // 2 Cách để copy một mảng
// const arrayB = arrayA.slice(0);
// const arrayC = [...arrayA];
// const arrayD = arrayA;
// arrayD.push(100);
// console.log("arrayA: ", arrayA); // [1, 2, 3]
// console.log("arrayB: ", arrayD); // [1, 2, 3, 100]

// const courses = ["lession1", "lession3", "lession5"];
// courses.splice(1, 0, "lession2");
// console.log(courses);
// courses.splice(3, 0, "lession4");
// console.log(courses);

// Object
// const myInfor = {
//   "user name": "Quoc Tri",
//   age: 18,
//   address: "HN",
//   email: "quoctri@fpt.edu.com",
//   gender: "Male",
// };

// console.log(myInfor["user name"]);
// console.log(Object.keys(myInfor));
// console.log(Object.values(myInfor));

// const myStudent = ["Chi", "Hieu", "Khoa", "Thang"];
// for (let i = 0; i < myStudent.length; i++) {
//   console.log(`Thay xin chao ban ${myStudent[i]}`);
// }
// let i = 0;
// for (;;) {
//   if (i >= myStudent.length) {
//     break;
//   }
//   console.log(`Thay xin chao ban ${myStudent[i]}`);
//   i++;
// }

/**
 * for(MD1; MD2; MD3) {
 * code trong for
 * }
 *
 * MD1: Khai báo biến đếm: i
 * MD2: Điều kiện để dừng vòng lặp
 * MD3: Bước nhảy
 */

/**
 * Tạo một mảng chứa các object là các thông tin của sinh viên bao gồm: name, address.
 * Dùng vòng lặp for in ra lời chào: "Xin chào bạn <name> đến từ <address>"
 */

const myClass = [
  { name: "Quoc Tri", add: "HN" },
  { name: "Batman", add: "Vuong Quoc Anh" },
  { name: "Hoang Hai", add: "Binh Duong" },
  { name: "Nguyen Phuong Hang", add: "Binh Duong" },
  { name: "Messi", add: "Bo Dao Nha" },
  { name: "CR7", add: "Mỹ Đình" },
];

for (i = 0; i < myClass.length; i++) {
  console.log(`Xin chào ${myClass[i].name} đến từ ${myClass[i].add}`);
}
/**
 * Làm một vòng lặp for in ra hình tam giác với mỗi hàng tăng thêm 1 dấu "#"
 * Làm lại bài toán trên dưới dạng hàm inTamGiac("Ký tự muốn in", "số dòng muốn in")
 */
// #
// ##
// ###
// ####

for (let i = 0; i < 4; i++) {
  // code intamgiac
}

// inTamGiac("h", 4);

// h
// hh
// hhh
// hhhh
