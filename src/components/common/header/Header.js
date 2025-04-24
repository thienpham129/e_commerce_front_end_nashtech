import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full bg-blue-600 px-6 py-3 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-white text-xl font-semibold">
                    MyStore
                </Link>

                <nav>
                    <Link to="/signup"
                        className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition">
                        SignUp
                    </Link>
                </nav>
            </div>

        </header>
    );
};

export default Header;