import { Link } from "react-router-dom";
import { isAdmin } from "../../hook/UserRoles";

const Header = () => {
    const token = localStorage.getItem("token");
    const isLoggedIn = !!token;
    const admin = isLoggedIn && isAdmin();
    const userName = localStorage.getItem("userName");
    console.log(userName);  // Kiểm tra xem giá trị có đúng không

    return (
        <header className="w-full bg-blue-600 px-6 py-3 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-red text-xl font-semibold">
                    MyStore
                </Link>

                <nav className="flex gap-4 items-center">
                    {admin && (
                        <Link to={`/admin/dashboard`}
                            className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-md font-medium hover:bg-yellow-300 transition">
                            Admin
                        </Link>
                    )}

                    {isLoggedIn && (
                        <span className="text-red-500 font-medium mr-2">
                            {userName}
                        </span>
                    )}

                    {!isLoggedIn && (
                        <>
                            <Link to={`/signUp`}
                                className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition">
                                SignUp
                            </Link>
                            <Link to={`/signIn`}
                                className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition">
                                Login
                            </Link>
                        </>
                    )}

                    {isLoggedIn && (<button
                        onClick={() => {
                            localStorage.clear();
                            window.location.href = "/signIn";
                        }}
                        className="bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100 transition"
                    >
                        Logout
                    </button>
                    )}
                </nav>
            </div>

        </header>
    );
};

export default Header;