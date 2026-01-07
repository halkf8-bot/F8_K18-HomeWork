// Lesson 1
function classifyStudent(score) {
    if (score < 0 || score > 10) {
        return "Invalid score! Please enter a number from 0 to 10.";
    }
    if (score >= 9) {
        return "Excellent";
    } else if (score >= 8) {
        return "Very Good";
    } else if (score >= 6.5) {
        return "Good";
    } else if (score >= 5) {
        return "Average";
    } else {
        return "Weak";
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
            return "Month " + month + " has 31 days";
        case 4:
        case 6:
        case 9:
        case 11:
            return "Month " + month + " has 30 days";
        case 2:
            return "Month 2 has 28 or 29 days";
        default:
            return "Error: Please enter a month from 1 to 12";
    }
}
console.log(getDaysInMonth(1));

// Lesson 3
function checkEvenOdd(n) {
    return (n % 2 === 0) ? "Even" : "Odd";
}
console.log(checkEvenOdd(5));

// Lesson 4
function calculateTicketPrice(age, basePrice) {
    let finalPrice = (age < 13) ? basePrice * 0.5 : basePrice;
    return finalPrice;
}
let priceChild = calculateTicketPrice(10, 100000);
console.log("Age 10 - Price: " + priceChild);
let priceAdult = calculateTicketPrice(25, 100000);
console.log("Age 25 - Price: " + priceAdult);

// Lesson 5
function toFahrenheit(celsius) {
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