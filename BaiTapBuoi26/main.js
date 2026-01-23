const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];
const orders = [];
let currentOrderId = 1;

// Hàm tạo đơn hàng mới
function createOrder(productId, orderQuantity) {
    if (productId === null || orderQuantity === null) {
        console.log("Lỗi: Dữ liệu không hợp lệ");
        return;
    }
    const product = products.find(p => p.id === productId);
    if (!product) {
        throw new Error("Product not found");
    }
    if (product.remaining < orderQuantity) {
        console.log(`Lỗi: Sản phẩm "${product.name}" không đủ hàng (còn ${product.remaining}).`);
        return;
    }
    product.remaining = product.remaining - orderQuantity;
    const newOrder = {
        id: currentOrderId,
        productId: productId,
        quantity: orderQuantity
    };
    orders.push(newOrder);
    currentOrderId++;
    console.log(`-> Đã tạo đơn hàng #${newOrder.id} thành công!`);
    return newOrder;
}

// Hàm cập nhật đơn hàng
function updateOrder(orderId, newQuantity) {
    const order = orders.find(o => o.id === orderId);
    if (!order) {
        console.log("Không tìm thấy đơn hàng để cập nhật.");
        return;
    }
    const product = products.find(p => p.id === order.productId);
    const difference = newQuantity - order.quantity;
    if (product.remaining < difference) {
        console.log("Error: out of stock");
        return;
    }
    product.remaining = product.remaining - difference;
    order.quantity = newQuantity;
    console.log(`-> Đã cập nhật đơn hàng #${orderId} thành số lượng ${newQuantity}.`);
}

// Hàm xóa đơn hàng
function deleteOrder(orderId) {
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) {
        throw new Error("not found");
    }
    const orderToDelete = orders[orderIndex];
    const product = products.find(p => p.id === orderToDelete.productId);
    product.remaining = product.remaining + orderToDelete.quantity;
    orders.splice(orderIndex, 1);
    console.log(`-> Đã xóa đơn hàng #${orderId}. Kho đã được hoàn lại.`);
}

// Test
// Test 1: Mua Gạo (id: 1), số lượng 5. Kho gạo đang 20 -> còn 15
createOrder(1, 5);
// Test 2: Mua Trứng (id: 5), số lượng 10. Kho trứng đang 18 -> còn 8
createOrder(5, 10);
// Test 3: Cập nhật đơn Gạo (đơn #1) từ 5 lên 8 cái.
// Chênh lệch là 3. Kho gạo đang 15 -> trừ tiếp 3 -> còn 12.
updateOrder(1, 8);
// Test 4: Cố tình mua quá số lượng để check lỗi
// Mua Sữa (id: 4 - còn 25) nhưng mua 100 cái
createOrder(4, 100);
// Test 5: Xóa đơn hàng Trứng (đơn #2 - đang mua 10 cái)
// Kho trứng đang 8 -> cộng lại 10 -> lên 18
deleteOrder(2);
console.log("Danh sách Sản Phẩm sau khi xử lý:", products);
console.log("Danh sách Đơn Hàng sau khi xử lý:", orders);