const myDocument = {
  html: {
    head: {
      title: {
        innerText: "Tên trang web",
      },
      link: {
        href: "./style.css",
      },
    },

    body: {
      h2: {
        innerText: "DOM",
      },
      ol: {
        li: {},
        li: {},
        li: {},
        li: {},
      },
    },
  },
};

console.log(myDocument);
const h2Element = document.getElementById("title");
const h2ElementsByClass = document.getElementsByClassName("title")[0];
const h2ElementsByTagName = document.getElementsByTagName("h2")[1];
console.log("h2Element: ", h2Element);

// BTVN: Đọc slide 5 từ trang 18 đến hết và code lại code mẫu.
