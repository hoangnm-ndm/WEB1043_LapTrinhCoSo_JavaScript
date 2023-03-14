console.log("test trong file index.js");

/**
 * Bài 1:
  Viết một function Javascript để tính cước điện thoại bàn cho một hộ gia đình với đầu vào là số phút điện thoại mà gia đình đó đã sử dụng trong tháng vừa qua, biết rằng:
  Phí thuê bao bắt buộc là 25 nghìn.
  600 đồng cho mỗi gọi của 50 phút đầu tiên.
  400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
  200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.
  Đầu ra sẽ là thông báo số tiền mà gia đình đó phải trả
  Input: n (với n là số phút mà tháng qua  gia đình đã sử dụng)
  Output: Số tiền phải trả
 */

function tinhTienDienThoai(soPhutGoi) {
  let soTien = 25000;
  if (soPhutGoi <= 50) {
    soTien = soTien + soPhutGoi * 600;
  }
  if (soPhutGoi <= 200 || soPhutGoi > 50) {
    soTien = soTien + 50 * 600 + (soPhutGoi - 50) * 400;
  } else {
    soTien = soTien + 50 * 600 + 150 * 400 + (soPhutGoi - 200) * 200;
  }

  // Cach 1: console.log trong function va chi can goi ham:
  // console.log(`Số tiền điện thoại của gia đình đó phải đóng là: ${soTien}`);

  // Cach 2: su dung tu khoa return va console.log(tinhTienDienThoai(soTien))
  return soTien;
}

// console.log(tinhTienDienThoai(100));
// tinhTienDienThoai(300);

// console.log(
//   `Số tiền điện thoại của gia đình đó phải đóng là: ${tinhTienDienThoai(10)}`
// );

// let soPhut = prompt("Nhap so phut");
// console.log(typeof Number(soPhut));

// const myName = String("Hoang");

// for(DM1; MD2; MD3) {
//   // Code trong vong lap.
// }

// MD1: Khai báo 1 biến đếm: i - index
// MD2: Điều kiện đúng để thực hiện lặp
// MD3: Bước nhảy mỗi lần lặp

// let myName = "Hoangnm";
// for (let i = 0; i < myName.length; i++) {
//   console.log(myName[i]);
// }
// let i = 0;
// for (;;) {
//   if (i >= 10) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

const myStudent = ["Hoang", "Cuong", "Dung", "Duyen", "Huong", "Thoa"];
// In ra loi chao cho tung sinh vien, (su dung vong lap for)
for (let i = 0; i < myStudent.length; i++) {
  console.log(`Xin chao ban ${myStudent[i]}`);
}

const myStudent2 = [
  {
    name: "Hoang",
    address: "HN",
  },
  {
    name: "Cuong",
    address: "Mat chét tơ",
  },
  {
    name: "Donal Trump",
    address: "Mỹ",
  },
  {
    name: "CR7",
    address: "Mỹ Tho",
  },
];

// for() {

// }
