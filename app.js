const express = require('express'); // Import thư viện Express
const app = express(); // Tạo một ứng dụng Express
const port = 3000; // Chọn một cổng để lắng nghe

app.get('/trangtru', (req, res) => { // Định nghĩa một route cho đường dẫn gốc '/'
    res.send('Hello World!'); // Gửi phản hồi "Hello World!"
});
console.log("Nodemon đang chạy thành công!");

app.listen(port, () => { // Khởi động máy chủ và lắng nghe trên cổng đã chọn
    console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});