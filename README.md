🌤️ Weather App (React + OpenWeatherMap)
Ứng dụng thời tiết đơn giản sử dụng React và OpenWeatherMap API để hiển thị nhiệt độ, độ ẩm, tốc độ gió và icon thời tiết của các thành phố.

🚀 Tính năng
Tìm kiếm thời tiết theo tên thành phố

Hiển thị nhiệt độ, độ ẩm, tốc độ gió

Cập nhật icon dựa trên điều kiện thời tiết thực tế

Giao diện thân thiện, responsive

🧑‍💻 Công nghệ sử dụng
Công nghệ	Mô tả
React.js	Frontend framework
Vite	Công cụ build siêu nhanh cho React
OpenWeatherMap	API cung cấp dữ liệu thời tiết
CSS	Tùy chỉnh giao diện và bố cục

🔧 Cài đặt và chạy ứng dụng
Clone project về máy:

bash
Sao chép
Chỉnh sửa
git clone https://github.com/your-username/weather-app.git
cd weather-app
Cài đặt các dependencies:

bash
Sao chép
Chỉnh sửa
npm install
Tạo file .env ở thư mục gốc:

env
Sao chép
Chỉnh sửa
VITE_APP_ID=your_openweather_api_key
👉 Thay your_openweather_api_key bằng API key của bạn từ https://openweathermap.org/api

Chạy ứng dụng:

bash
Sao chép
Chỉnh sửa
npm run dev
Truy cập: http://localhost:5173 để xem app.

📁 Cấu trúc thư mục
bash
Sao chép
Chỉnh sửa
weather-app/
├── src/
│   ├── assets/           # Icon thời tiết
│   ├── Weather.jsx       # Component chính
│   └── Weather.css       # Style giao diện
├── .env                  # API Key
├── index.html
├── package.json
└── vite.config.js
### 📸 Giao diện ứng dụng

![Weather App Screenshot](https://raw.githubusercontent.com/sjsjsmsmsj/WEATHERAPP/main/hi.png)


💡 Gợi ý cải tiến thêm
Tự động lấy vị trí người dùng (geolocation) và hiển thị thời tiết hiện tại

Thêm hiển thị thời gian thực, icon động

Hiển thị thông báo lỗi khi nhập sai tên thành phố

📝 License
This project is open source and free to use.

