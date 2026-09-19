const { login } = require("./auth");

describe("Regression Test - Login", () => {

    test("Đăng nhập đúng với admin/123", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Mật khẩu sai phải trả về false", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Username rỗng phải trả về false", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Password rỗng phải trả về false", () => {
        expect(login("admin", "")).toBe(false);
    });

    test("Username và password đều rỗng", () => {
        expect(login("", "")).toBe(false);
    });

    test("Mật khẩu chứa ký tự đặc biệt phải trả về false", () => {
        expect(login("admin", "123@#$")).toBe(false);
    });

    test("Username không tồn tại phải trả về false", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Tài khoản bị khóa phải trả về false", () => {
        expect(login("lockedUser", "123")).toBe(false);
    });

});
