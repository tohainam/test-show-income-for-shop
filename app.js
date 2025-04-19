const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.get("/demo1", (req, res) => {
  const indexPath = path.join(__dirname, "client", "index.html");

  // Gửi tệp index.html về cho trình duyệt client
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Lỗi khi gửi tệp:", err);
      // Quan trọng: Kiểm tra xem header đã được gửi chưa trước khi gửi response lỗi
      if (!res.headersSent) {
        res.status(500).send("Lỗi máy chủ: Không thể gửi tệp.");
      }
    } else {
      console.log("Đã gửi thành công:", "index.html");
    }
  });
});

app.get("/demo2", (req, res) => {
  const indexPath = path.join(__dirname, "client", "index2.html");

  // Gửi tệp index.html về cho trình duyệt client
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Lỗi khi gửi tệp:", err);
      // Quan trọng: Kiểm tra xem header đã được gửi chưa trước khi gửi response lỗi
      if (!res.headersSent) {
        res.status(500).send("Lỗi máy chủ: Không thể gửi tệp.");
      }
    } else {
      console.log("Đã gửi thành công:", "index.html");
    }
  });
});

app.get("/demo3", (req, res) => {
  const indexPath = path.join(__dirname, "client", "index3.html");

  // Gửi tệp index.html về cho trình duyệt client
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Lỗi khi gửi tệp:", err);
      // Quan trọng: Kiểm tra xem header đã được gửi chưa trước khi gửi response lỗi
      if (!res.headersSent) {
        res.status(500).send("Lỗi máy chủ: Không thể gửi tệp.");
      }
    } else {
      console.log("Đã gửi thành công:", "index.html");
    }
  });
});

// Optional: Xử lý các route không khớp (404 Not Found)
app.use((req, res) => {
  res.status(404).send("404 - Không tìm thấy trang yêu cầu.");
});

// 5. Khởi động server và lắng nghe trên cổng đã định nghĩa
app.listen(PORT, () => {
  console.log(`Server đang chạy tại địa chỉ http://localhost:${PORT}`);
});
