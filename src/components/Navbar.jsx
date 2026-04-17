import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="container navbar__inner">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-icon">🌱</span>
                    SaveBite
                </Link>

                <div className="navbar__links">
                    <Link
                        to="/"
                        className={`navbar__link ${location.pathname === "/" ? "active" : ""
                            }`}
                    >
                        Home
                    </Link>

                    <Link
                        to="/deals"
                        className={`navbar__link ${location.pathname === "/deals" ? "active" : ""
                            }`}
                    >
                        Deals
                    </Link>

                    <Link
                        to="/dashboard"
                        className={`navbar__link ${location.pathname === "/dashboard" ? "active" : ""
                            }`}
                    >
                        Restaurant
                    </Link>
                </div>

                <div className="navbar__actions">
                    <Link to="/deals" className="btn btn-primary">
                        Explore
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;