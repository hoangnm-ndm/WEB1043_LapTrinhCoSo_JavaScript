function validateForm() {
  // Lấy tất cả các mục radio button trong form

  const radios = document.getElementsByName("myRadio");

  // Lặp qua tất cả các mục và kiểm tra xem có mục nào được chọn hay không
  let isChecked = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isChecked = true;
      break;
    }
  }

  // Nếu không có mục nào được chọn, hiển thị thông báo lỗi
  if (!isChecked) {
    alert("Vui lòng chọn một trong các mục radio button.");
    return false;
  }

  // Nếu có mục được chọn, tiếp tục submit form
  return true;
}
