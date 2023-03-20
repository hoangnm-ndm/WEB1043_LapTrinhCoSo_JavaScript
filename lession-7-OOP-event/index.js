function Dog(dogName, weight, color, breed, type) {
  this.dogName = dogName;
  this.weight = weight;
  this.color = color;
  this.breed = breed;
  this.type = type;
  this.sua = function () {
    return "Gau Gau";
  };
}
let dog1 = new Dog("Jacky", 0.8, "brown", "chihuahua teacup", "short hair");
let dog2 = new Dog("John", 1, "brown", "chihuahua mini", "long hair");

console.log(dog1);
console.log(dog2);
console.log(dog2.dogName);

const myCar = {
  name: "Lamborgini",
  color: "pink",
  "car price": 100000,
};

console.log(myCar["car price"]);

const myClass = [
  {
    name: "CUong",
    add: "HN",
  },
];

const myInfor = {
  name: "Hoang",
  favourites: ["game", "sleep", "code", "coffee", "read"],
  skills: ["swimming", "javascript code", "python", "C++", "PHP"],
};

const myCompany = {
  name: "abc",
  BOD: [
    {
      name: "Dung",
      position: "CTO",
    },
  ],
};

// document.write(`chieu cao cua cua so la: ${screen.height} <br />`);
// document.write(`chieu rong cua cua so la: ${screen.width}`);

document.write("host: " + location.host + "<br>");
document.write("hostname: " + location.hostname + "<br>");
document.write("href: " + location.href + "<br>");
document.write("pathname: " + location.pathname + "<br>");
document.write("port: " + location.port + "<br>");
document.write("protocol: " + location.protocol + "<br>");

// function sendInfor() {
//   if (true) {
//     // thuc hien gui du lieu di
//     console.log("thanh cong!");
//   }
// }
