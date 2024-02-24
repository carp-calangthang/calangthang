const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Cấu hình express để phục vụ các tệp tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Phục vụ trang home từ tệp index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Cấu hình express để phục vụ các tệp JavaScript với MIME type application/javascript
app.use('/js', express.static(path.join(__dirname, 'public', 'js'), { 'Content-Type': 'application/javascript' }));

// Cấu hình express để phục vụ các tệp CSS với MIME type text/css
app.use('/css', express.static(path.join(__dirname, 'public', 'css'), { 'Content-Type': 'text/css' }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
