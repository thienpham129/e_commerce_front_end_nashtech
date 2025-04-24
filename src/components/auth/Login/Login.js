import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../service/AuthService";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn(form);
            console.log(res.data);  // Kiểm tra xem dữ liệu có đầy đủ không

            const { token, userName, roles } = res.data.response;
            localStorage.setItem("token", token);
            localStorage.setItem("roles", JSON.stringify(roles))
            localStorage.setItem("userName", userName);
            navigate("/user/products");
        } catch (err) {
            setMessage(
                err.response?.data?.message || "Đăng nhập thất bại"
            )
        }
    }


    return (
        <div className="container mx-auto max-w-md mt-10 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

            {message && (
                <div className="mb-4 text-center text-sm text-red-600">{message}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default Login;