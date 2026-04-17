import { Link } from "react-router-dom";

function Success() {
    return (
        <div className="success-page">
            <div className="success-card">
                <h1> Order Confirmed!</h1>

                <p>Your food deal has been successfully reserved.</p>

                <div className="impact-box">
                    <h2>Environmental Impact</h2>
                    <p> Food Saved: 420g</p>
                    <p> CO₂ Reduced: 1.2kg</p>
                    <p> Money Saved: ₹80</p>
                </div>

                <Link to="/deals" className="btn">
                    Back to Deals
                </Link>
            </div>
        </div>
    );
}

export default Success;