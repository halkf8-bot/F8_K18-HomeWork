// hàm kiểm tra tồn kho
function getProduct(productId) {
    console.log("Kiểm tra tồn kho...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productId === 1) {
                console.log("Tồn kho hợp lệ")
                resolve({
                    productId: 1,
                    name: "iPhone",
                    price: "20000000",
                    stock: 5
                })
            } else {
                reject("Sản phẩm không tồn tại")
            }
        }, 1000)
    })
}

// hàm xử lý thanh toán
function processPayment(product) {
    console.log("Đang tính toán...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product.stock > 0) {
                console.log("Thanh toán thành công")
                resolve("Thanh toán thành công")
            } else {
                reject("Hết hàng")
            }
        }, 1500)
    })
}

// hàm tạo đơn hàng
function createOrder(product) {
    console.log("Đang tạo đơn hàng...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Đặt hàng thành công!")
            resolve({
                orderId: 999,
                productName: product.name,
                status: "SUCCESS"
            })
        }, 1000)
    })
}

// thực thi chuỗi promise promise chaining
// khai báo biến tạm
let sanPhamHienTai
getProduct(1)
    .then((product) => {
        sanPhamHienTai = product
        return processPayment(product)
    })
    .then((thongBaoThanhToan) => {
        return createOrder(sanPhamHienTai)
    })
    .then((orderData) => {
        console.log("Order:", orderData)
    })
    .catch((error) => {
        console.log("Lỗi:", error)
    })

