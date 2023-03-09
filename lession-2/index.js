console.log("lession 2");

/**
 * Biến var:
 * 1. Khai báo lại được
 * 2. Gán lại được
 * 3. Gọi trước khi gán trị thì sẽ nhận kết quả là "undefined"
 */
console.log(myBox);
{
  {
    {
      {
        {
          {
            var myBox = "apple";
          }
        }
      }
    }
  }
}
console.log(myBox);

// var có thể khai bảo lại
// var myBox = "banana";
// console.log(myBox);

// myBox = "laptop";
// var có thể gán lại giá trị
// console.log(myBox);

/**
 * Tu khoa let:
 * 1. Không thể dùng biến trước khi khởi tạo biến bằng từ khoá let.
 * 2. Let có phạm vi sử dụng là block-scope
 * 3. Không khai báo lại được
 * 4. Gán lại được
 */
// console.log(myAge);

let myAge = 32;
// global-scope
{
  // block-scope
  console.log(myAge);
  // let myAge = 33;
}
console.log(myAge);

/**
 * const: (constant)
 * 1. Không gán lại được
 * 2. Không khởi tạo lại được
 * 3. Không dùng được trước khi khai báo
 * 4. Có phạm vi sử dụng là block-scope
 */
// console.log(myID);
{
  {
    {
      {
        {
          const myID = "011234567890";
          // console.log(myID);
        }
      }
    }
  }
}
// const myID = "4567895678";
// myID = "2345678";

// console.log(myID);

// console.error("Đây là một cảnh báo lỗi!");
// console.warn("Một cảnh báo");

/**
 * Array: là kiểu dữ liệu dùng để liệt kê.
 */

// const myStudent = ["Phúc", "Sơn", "Thanh", "Tùng"];
// console.log("myStudent: ", myStudent);
// const myStudent2 = myStudent.push("Hưng");
// console.log("myStudent: ", myStudent);
// console.log("Danh sách sinh viên bàn đầu là:", myStudent);
// console.log("Số lượng sinh viên bàn đầu là: ", myStudent.length);

/**
 * Các kiểu dữ liệu nguyên thuỷ (tham trị):
 * 1. String
 * 2. Number
 * 3. Null
 * 4. Undefined
 * 5. Symbol
 * 6. BigInt
 * 7. Boolean
 *
 * Các kiểu dữ liệu phức tạp (tham chiếu)
 * 1. Array
 * 2. Object
 * 3. Function
 */

// let yourAnswer = confirm("Có muốn học thầy không? ");
// let ageOfStudent = prompt("Em bao nhiêu tuổi rồi?");
// console.log("Cau tra loi cua hoc sinh: ", yourAnswer);
// console.log(ageOfStudent);

// let myNumber = "dfghjk";
// console.log(myNumber.length);
// console.log(typeof myNumber);

// if (typeof myNumber === "number") {
//   if (myNumber % 2 === 0) {
//     console.log(`${myNumber} là một số chẵn`);
//   } else {
//     console.log(`${myNumber} không \t là một số chẵn`);
//   }
// } else {
//   console.log(`${myNumber} không phải \n là một number `);
// }

// let userName = "hoangnm";
// if (userName.length < 8) {
//   console.log(`userName phải có tối thiểu 8 ký tự`);
// }

// `` - backtick javascript.

// console.log("Ket qua cua menh de: ", myNumber % 2 === 0);

const myArray = [1, 2, 3, 4];
const newArray = myArray;
newArray.push(100);
console.log("myArray: ", myArray);
console.log("newArray: ", newArray);

// BTVN:
/**
 * 1. Tim hieu ve ham và viết 1 hàm kiểm tra xem một số có phải là số chẵn hay không?
 * 2. Tìm hiểu object và viết một object có tên là myInfor chứa: name, age, msv, email
 */
