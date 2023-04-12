// Lấy các phần tử HTML theo id
const quantity1 = document.getElementById("quantity1");
const price1 = document.getElementById("price1");
const total1 = document.getElementById("total1");
const quantity2 = document.getElementById("quantity2");
const price2 = document.getElementById("price2");
const total2 = document.getElementById("total2");
const quantity3 = document.getElementById("quantity3");
const price3 = document.getElementById("price3");
const total3 = document.getElementById("total3");
const grandTotal = document.getElementById("grandTotal");

// Tính tiền sản phẩm 1
function calculateTotal1() {
  const qty = quantity1.value;
  if (qty >= 0) {
    const price = price1.innerHTML;
    const total = qty * price;
    total1.innerHTML = total;
    calculateGrandTotal();
  } else {
    alert("Hãy nhập vào một số nguyên dương");
  }
}

// Tính tiền sản phẩm 2
function calculateTotal2() {
  const qty = quantity2.value;
  if (qty >= 0) {
    const price = price2.innerHTML;
    const total = qty * price;
    total2.innerHTML = total;
    calculateGrandTotal();
  } else {
    alert("Hãy nhập vào một số nguyên dương");
  }
}

// Tính tiền sản phẩm 3
function calculateTotal3() {
  const qty = quantity3.value;
  if (qty >= 0) {
    const price = price3.innerHTML;
    const total = qty * price;
    total3.innerHTML = total;
    calculateGrandTotal();
  } else {
    alert("Hãy nhập vào một số nguyên dương");
  }
}

// Tính tổng tiền
function calculateGrandTotal() {
  const grandTotalValue =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total3.innerHTML);
  grandTotal.innerHTML = grandTotalValue;
}

// Gắn sự kiện cho các ô số lượng
quantity1.addEventListener("change", calculateTotal1);
quantity2.addEventListener("change", calculateTotal2);
quantity3.addEventListener("change", calculateTotal3);
