function Login(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Đang gửi resquest đăng nhập...")
        setTimeout(() => {
            if (username === "admin" && password === "123456") {
                resolve({
                    id: 1,
                    username: "admin",
                    role: "ADMIN"
                })
            } else {
                reject("Sai tài khoản hoặc mật khẩu")
            }
        }, 2000)
    })
}

Login("admin", "123456")
    .then((data) => {
        console.log("Đăng nhập thành công")
        console.log("User:", data)
    })
    .catch((error) => {
        console.log("Lỗi:", error)
    })