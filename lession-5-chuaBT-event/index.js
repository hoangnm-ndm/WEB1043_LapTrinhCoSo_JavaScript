// Bài 1:
// Viết một function Javascript để tính cước điện thoại bàn cho một hộ gia đình với đầu vào là số phút điện thoại mà gia đình đó đã sử dụng trong tháng vừa qua, biết rằng:
// Phí thuê bao bắt buộc là 25 nghìn.
// 600 đồng cho mỗi gọi của 50 phút đầu tiên.
// 400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
// 200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.
// Đầu ra sẽ là thông báo số tiền mà gia đình đó phải trả
// Input: n (với n là số phút mà tháng qua  gia đình đã sử dụng)
// Output: Số tiền phải trả

function tinhTienDienThoai(tenHoDan, phut) {
  let soTien = 25000;
  if (phut <= 50 && phut >= 0) {
    soTien = soTien + phut * 600;
  } else if (phut <= 200 && phut > 50) {
    soTien = soTien + 50 * 600 + (phut - 50) * 400;
  } else {
    soTien = soTien + 50 * 600 + 150 * 400 + (phut - 200) * 200;
  }
  // return soTien;
  console.log(`Hộ dân ${tenHoDan} phải đóng ${soTien} VND`);
}

tinhTienDienThoai("Ba dách ô ba ma", 100);
tinhTienDienThoai("Khoa", 200);
tinhTienDienThoai("Thắng", 600);

const thongTinPhutGoi = [
  {
    name: "Hoang",
    phut: 100,
    phone: "22345678",
    address: "HD - HN",
  },
  {
    name: "Chi",
    phut: 567,
  },
  {
    name: "Tri",
    phut: 33,
  },
  {
    name: "Thuy",
    phut: 10065,
  },
  {
    name: "CR7",
    phut: 1000,
  },
];

for (let i = 0; i < thongTinPhutGoi.length; i++) {
  tinhTienDienThoai(thongTinPhutGoi[i].name, thongTinPhutGoi[i].phut);
}

// Bài : 2
// 1. Viết function Javascript ⇒ tính tổng các số chẵn từ 1 tới n (Gợi ý sử dụng vòng lặp).

function tinhTongSoChan(n) {
  let tongSoChan = 0;
  for (i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      tongSoChan += i;
    }
  }
  return tongSoChan;
}

/**
 * Bài 3: 
Viết một function có tên veTamGiac()
Nhập vào một ký tự và một số bất kỳ, in ra màn hình theo định dạng sau:
veTamGiac(“#”,4);
#
## 
### 
####
 */

function veTamGiac(kyTu, number) {
  let s = "";
  for (i = 1; i < number; i++) {
    s += kyTu;
    console.log(s);
  }
}

veTamGiac("#", 4);
veTamGiac("H", 7);

/*Viết một Function chèn phần tử vào một vị trí bất kỳ trong mảng
Ví dụ: 
function insert(myArray,index,”newItem”)
*/

const myArray = [1, 2, 3, 4, 5];
// const myArray2 = [1, 2, 3, 100, 4, 5];

function myInsert(myArray, index, item) {
  myArray.splice(index, 0, item);
}

myInsert(myArray, 2, 100);
console.log(myArray);
