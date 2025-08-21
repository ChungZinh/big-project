const XLSX = require("xlsx");
const fs = require("fs");

// đọc file Excel
const workbook = XLSX.readFile("sample_users.xlsx");
const sheet_name = workbook.SheetNames[0];

// convert sheet sang JSON, mặc định hàng đầu là header
const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name]);

// lưu ra file
fs.writeFileSync("data.json", JSON.stringify(jsonData, null, 4));

console.log("Đã convert xong!");
