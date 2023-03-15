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
