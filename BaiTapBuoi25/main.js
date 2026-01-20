// Task 1
const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 }
];

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 }
        ]
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 }
        ]
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 }
        ]
    }
];

function findBestSellingProduct(productList, orderList) {
    let revenueByProduct = {};
    for (const order of orderList) {
        for (const item of order.items) {

            let product = null;
            for (const p of productList) {
                if (p.id === item.productId) {
                    product = p;
                    break;
                }
            }

            if (product) {
                const currentRevenue = product.price * item.quantity;
                if (revenueByProduct[item.productId]) {
                    revenueByProduct[item.productId] += currentRevenue;
                } else {
                    revenueByProduct[item.productId] = currentRevenue;
                }
            }
        }
    }

    let maxRevenue = 0;
    let bestProductId = null;

    for (const pid in revenueByProduct) {
        if (revenueByProduct[pid] > maxRevenue) {
            maxRevenue = revenueByProduct[pid];
            bestProductId = pid;
        }
    }

    let bestProduct = null;
    if (bestProductId) {
        for (const p of productList) {
            if (p.id == bestProductId) {
                bestProduct = p;
                break;
            }
        }
    }

    if (bestProduct) {
        bestProduct.totalRevenue = maxRevenue;
        return bestProduct;
    } else {
        return null;
    }
}

const result = findBestSellingProduct(products, orders);
console.log("Sản phẩm bán chạy nhất là:", result);