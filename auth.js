function login(username, password) {
    // Không cho phép username hoặc password rỗng
    if (!username || !password) {
        return false;
    }

    // Giả lập tài khoản admin đang hoạt động
    const lockedAccounts = ["lockedUser"];

    // Kiểm tra tài khoản bị khóa
    if (lockedAccounts.includes(username)) {
        return false;
    }

    // Đăng nhập hợp lệ
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = { login };
