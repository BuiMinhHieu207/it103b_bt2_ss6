const hangDoiXeCho = ['30A-00755', '29D-12345', '51C-65678'];

// 1. Sửa lỗi lấy xe: Dùng shift() để lấy phần tử đầu tiên (đúng nguyên tắc xếp hàng)
const xeVaoSac = hangDoiXeCho.shift();

// Thêm xe mới vào cuối hàng
hangDoiXeCho.push("63D-88888");

console.log(`Xe đang vào sạc: ${xeVaoSac}`);
console.log("--- BẢNG HIỂN THỊ LED ---");

// 2. Sửa lỗi vòng lặp: Đổi điều kiện thành i < length để không bị lặp quá giới hạn mảng
for (let i = 0; i < hangDoiXeCho.length; i++) {
  console.log(`STT ${i + 1}: ${hangDoiXeCho[i]}`);
}
