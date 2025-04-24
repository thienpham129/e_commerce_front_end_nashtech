import { Navigate, Outlet } from "react-router-dom";
import { isAdmin } from "../components/hook/UserRoles";

export const ProtectedRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" replace />;
}

export const AdminRoute = () => {
    return isAdmin() ? <Outlet /> : <Navigate to={`/user/products`} replace />
}