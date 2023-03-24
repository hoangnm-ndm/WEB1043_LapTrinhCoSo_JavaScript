// const myDocument = {
//   html: {
//     head: {
//       title: {
//         content: "Shoppee - Mua sam moi ngay",
//       },
//       link: {
//         href: "https://shoppee.com.vn",
//         content: "Shoppe",
//       },
//       meta: {},
//     },
//     body: {
//       h1: {
//         content: "Mua ban de dang voi shoppee va shoppee pay",
//       },
//       div: {},
//       footer: {
//         content: "noi dung cua footer",
//       },
//     },
//   },
// };

/**
 * getElementById: chỉ trả về một node đầu tiên tìm thấy bởi ID
 * getElementsByClass: lấy ra một danh sách các node có cùng class
 * getElementsByTagName: lấy ra một danh sách sách các thẻ cùng tên
 * querySelector: Lấy ra một node có selector chỉ định
 *
 * querySelectorAll: Lấy ra tất cả các node thoả mãn selector.
 */
const bodyElement = document.getElementsByTagName("body")[0];
console.log(bodyElement);
const h2Element = document.getElementById("lessionTitle");
console.log(h2Element);
const myLink = document.querySelector("ol#myList > li.item > a.myLink");
console.log(myLink);

// const listLanguages = document.querySelectorAll("ol > li > a.languageItem");
// console.log(listLanguages)

const listLanguages = document.querySelector("ol.languagesList");
console.log(listLanguages);

console.log(listLanguages.querySelector(".item2"));
// Slide 5 trang 19

// BTVN: đọc và làm các ví dụ từ trang 19 đến hết trong slide 5
