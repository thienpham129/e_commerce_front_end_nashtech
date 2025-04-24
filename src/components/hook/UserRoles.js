export const UseRoles = () => {
    const raw = localStorage.getItem("roles");
    if (!raw) return [];                 // chưa login → trả mảng rỗng
    try {
        return JSON.parse(raw);            // roles là JSON chuỗi
    } catch {
        return [];                         // parse lỗi → cũng trả rỗng
    }
};

export const isAdmin = () => {
    const roles = UseRoles();
    return roles.includes("Admin");
}