// const sv = {
//   name: "Duong Viet Long",
//   score: 9,
//   hienThi: function () {
//     if (this.score >= 5) {
//       this.hocluc = "Dau";
//     } else {
//       this.hocluc = "Rot";
//     }
//   },
// };

// console.log(sv.hocluc);

var sv = new Object();
sv.hoTen = prompt("Ho va ten: ");
sv.diem = prompt("Diem thi: ");
sv.hienthi = function () {
  if (this.diem >= 5) {
    this.hocLuc = "Dau";
  } else {
    this.hocLuc = "Rot";
  }

  document.write(`<h3>Họ và tên: ` + sv.hoTen + `</h3>`);
  document.write(`<h3>Điểm TB: ` + sv.diem + `</h3>`);
  document.write(`<h3>Học lực: ` + sv.hocLuc + `</h3>`);
};
