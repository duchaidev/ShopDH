# Sử dụng image gốc đã có Node.js
FROM node:14

# Thiết lập thư mục làm việc
WORKDIR /leduchai/frontend

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép tất cả các tệp và thư mục còn lại vào thư mục làm việc
COPY . .

# Build ứng dụng React
RUN npm run build

