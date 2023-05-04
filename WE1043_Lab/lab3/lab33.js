var check = true;
var a;
var b;
var opera;
function toanHang(number) {
  if (check) {
    a = number;
    check = false;
  } else {
    b = number;
  }
}
function toanTu(o) {
  opera = o;
}
function lamLai() {
  a = null;
  b = null;
  check = true;
  opera = null;
}
function thucHien() {
  switch (opera) {
    case "+":
      alert(a + b);
      break;
    case "-":
      alert(a - b);
      break;
    case "*":
      alert(a * b);
      break;
    case ":":
      alert(a / b);
      break;
  }
  lamLai();
}
