function login(username, password) {
    // Cập nhật chức năng đăng nhập trên feature/update-login

    if (!username || !password) {
        return false;
    }

    const lockedAccounts = ["lockedUser"];

    if (lockedAccounts.includes(username)) {
        return false;
    }

    if (username === "admin" && password === "9999") {
        return true;
    }

    return false;
}

module.exports = { login };
