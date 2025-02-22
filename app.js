const express = require('express'); // Import thư viện Express
const morgan = require('morgan'); // Import thư viên morgan
const app = express(); // Tạo một ứng dụng Express
const port = 3000; // Chọn một cổng để lắng nghe

// Thiết lập body-parser để chuyển dữ liệu từ request POST thành JSON
// Sử dụng Morgan để log request
app.use(morgan('dev'));
app.get('/trangtru', (req, res) => { // Định nghĩa một route cho đường dẫn gốc '/'
    res.send('Hello World!'); // Gửi phản hồi "Hello World!"
});
console.log("Nodemon đang chạy thành công!");

app.listen(port, () => { // Khởi động máy chủ và lắng nghe trên cổng đã chọn
    console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});