# Lab 04 - Magic 8 Ball

Sinh viên: **Nguyễn Anh Tuấn**  
MSSV: **23IT297**  
Lớp: **23SE2**  
*  

---

## 1. Mục tiêu Lab
Xây dựng ứng dụng Magic 8 Ball trong React Native, thực hành quản lý State bằng hook `useState`, lựa chọn ngẫu nhiên một phần tử từ danh sách câu trả lời và cập nhật giao diện theo thời gian thực khi người dùng tương tác.

## 2. Công nghệ sử dụng
- **React Native** (v0.86.3)
- **TypeScript**
- **Expo SDK** (~57.0.25)
- **Expo Status Bar**
- React Hooks: `useState`
- Các component cơ bản: `View`, `Text`, `Pressable`, `StyleSheet`

## 3. Chức năng chính
- Hiển thị quả cầu Magic 8 Ball 3D với hiệu ứng phản quang bóng gương, huy hiệu số 8 và cửa sổ tiên tri huyền bí.
- Khi nhấn nút **ASK** hoặc nhấn trực tiếp vào quả cầu Magic 8 Ball:
  - Hệ thống chọn ngẫu nhiên 1 câu trả lời từ danh sách 8 câu tiên tri.
  - Hiển thị câu trả lời rõ nét ở trung tâm quả cầu.
- Danh sách câu trả lời gồm 8 phương án:
  - *Yes*, *No*, *Maybe*, *Definitely*, *Ask again later*, *I don't think so*, *Absolutely*, *Very doubtful*.
- Thiết kế giao diện tông màu tối huyền ảo (Midnight Dark theme), tương thích tốt trên Android Emulator.

## 4. Cách chạy project

### Cài đặt dependencies:
```bash
npm install
```

### Khởi chạy ứng dụng:
```bash
npx expo start
```

- Nhấn phím `a` trên terminal để mở trực tiếp trên **Android Emulator**.
- Hoặc quét mã QR bằng ứng dụng **Expo Go** trên thiết bị thật.
"# Lab3_Dicee" 
