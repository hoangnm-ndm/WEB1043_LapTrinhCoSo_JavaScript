// console.log(myDocument);
const h2ElementbyID = document.getElementById("title");
const h2ElementsByClass = document.getElementsByClassName("title");
const h2ElementsByTagName = document.getElementsByTagName("h2");
const contentItemQuery = document.querySelectorAll(".contentItem")[1];
const contentItem2 = document.querySelector(".contentItem.item2");
// console.log(h2ElementbyID);
// console.log(h2ElementsByClass);
// console.log(h2ElementsByTagName);
// console.log(contentItemQuery);
// console.log(contentItem2);
// BTVN: Đọc slide 5 từ trang 18 đến hết và code lại code mẫu.
const olElement = document.querySelector("ol.contentList");
console.log(olElement);

console.log(olElement.getElementsByClassName("item3")[0]);
