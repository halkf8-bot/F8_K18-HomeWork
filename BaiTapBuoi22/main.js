// Lesson 1
function classifyStudent(score) {
    if (score < 0 || score >= 10) {
        console.log("Invalid score! Please enter a number from 0 to 10.");
        return;
    }
    if (score >= 9) {
        console.log("Excellent");
    } else if (score >= 8) {
        console.log("Very Good");
    } else if (score >= 6.5) {
        console.log("Good");
    } else if (score >= 5) {
        console.log("Average");
    } else {
        console.log("Weak");
    }
}
console.log(classifyStudent(1));

// Lesson 2
function getDaysInMonth(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Tháng " + month + " có 31 ngày");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Tháng " + month + " có 30 ngày");
            break;
        case 2:
            console.log("Tháng 2 có 28 ngày");
            break;
        default:
            console.log("Lỗi: Vui lòng nhập tháng từ 1 đến 12");
    }
}
console.log(getDaysInMonth(1));

// Lesson 3
let n = 10;
let result= (n % 2 === 0) ? "Even" : "Odd";
console.log(result);

// Lesson 4
let age = 10;
let basePrice = 100000;
let ticketPrice = (age < 13) ? basePrice * 0.5 : basePrice;
console.log("Tuổi khách hàng: " + age);
console.log("Giá vé phải trả: " + ticketPrice);

// Lesson 5
function convertToF(celsius) {
    return celsius * 1.8 + 32;
}
console.log("0 độ C = " + convertToF(0) + " độ F");     // Điểm đóng băng
console.log("30 độ C = " + convertToF(30) + " độ F");   // Trời nóng
console.log("100 độ C = " + convertToF(100) + " độ F"); // Điểm sôi

// Lesson 6
function calculateElectricityBill(kwh) {
    let totalBill = 0;
    if (kwh < 0) {
        return "Số điện không hợp lệ";
    }
    if (kwh <= 50) {
        totalBill = kwh * 1678;
    }
    else if (kwh <= 100) {
        // Gồm: Full 50 số đầu (bậc 1) + Phần dư ra (bậc 2)
        totalBill = (50 * 1678) + ((kwh - 50) * 1734);
    }
    else if (kwh <= 200) {
        totalBill = (50 * 1678) + (50 * 1734) + ((kwh - 100) * 2014);
    }
    else {
        totalBill = (50 * 1678) + (50 * 1734) + (100 * 2014) + ((kwh - 200) * 2536);
    }
    return totalBill;
}
console.log("Hóa đơn tiền điện");
let bill1 = calculateElectricityBill(30);
console.log("30 kWh: " + bill1 + " VND");

let bill2 = calculateElectricityBill(80);
console.log("80 kWh: " + bill2 + " VND");

let bill3 = calculateElectricityBill(250);
console.log("250 kWh: " + bill3.toLocaleString('vi-VN') + " VND");