function getRPS(value) {
  var arrRPS = ["Rock", "Paper", "Scissors"];
  var s = arrRPS[Math.floor(Math.random() * arrRPS.length)];
  var c = arrRPS[value];
  if (c == s) {
    alert(`Máy: ${c}; Bạn: ${s}; Kết quả: Hòa`);
  } else if (c == "Rock" && s == "Scissors") {
    alert(`Máy: ${c}; Bạn: ${s}; Kết quả: Bạn thắng`);
  } else if (c == "Rock" && s == "Paper") {
    alert(`Máy: ${c}; Bạn: ${s}; Kết quả: Bạn thua`);
  } else if (c == "Paper" && s == "Rock") {
    alert(`Máy: ${c}; Bạn: ${s}; Kết quả: Bạn thắng`);
  } else if (c == "Paper" && s == "Scissors") {
    alert(`Máy: ${c}; Bạn: ${s}; Kết quả: Bạn thua`);
  } else if (c == "Scissors" && s == "Paper") {
    alert(`Máy: ${c}; Bạn: ${s}; Kết quả: Bạn thắng`);
  } else if (c == "Scissors" && s == "Rock") {
    alert(`Máy: ${c}; Bạn: ${s}; Kết quả: Bạn thua`);
  }
}
