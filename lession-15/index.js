"use strict";
// console.log(1);
// console.log(1, 2, 3);

// function myConso(...arg) {
//   console.log(...arg);
// }
// myConso(1, 2, 3, 4);
console.log(gretting);

function myFunc() {
  var gretting = "Hello";
}

myFunc();

/**
 * Tại dòng 9 thực hiện việc gán x = 0, nhưng vì khai báo x bằng key "var" nên thực ra việc khai báo x đã được đưa lên đầu của block-code.
 * -> Đây là hiện tượng hoisting trong javascript
 */
