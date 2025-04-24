import { useState } from "react"
import { signUp } from "../../../service/AuthService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [form, setForm] = useState({ userName: "", email: "", password: "" });

    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signUp(form);
            setMessage(response.data.message || "Đăng ký thành công!");
            navigate("/login");
        } catch (err) {
            const msg = err.response?.data?.message || "Đăng ký thất bại!, thử lại";
            setMessage(msg);
        }
    };
    return (
        <div className="container mx-auto max-w-md mt-10 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

            {message && (
                <div className="mb-4 text-center text-sm text-red-600">{message}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    value={form.userName}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
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
                    Register
                </button>
            </form>
        </div>
    );
}

export default SignUp;