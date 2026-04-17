import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">SaveBite</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/deals">Deals</Link>
                <Link to="/dashboard">Restaurant</Link>
            </div>
        </nav>
    );
}

export default Navbar;