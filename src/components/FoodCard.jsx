import { Link } from "react-router-dom";

function FoodCard({ deal }) {
    return (
        <div className="food-card">
            <h2>{deal.item}</h2>
            <p><strong>{deal.restaurant}</strong></p>

            <p className="price">
                <span className="old">₹{deal.oldPrice}</span>
                <span className="new"> ₹{deal.newPrice}</span>
            </p>

            <p className="timer">{deal.time}</p>

            <Link to="/success" className="btn reserve-btn">
                Reserve Now
            </Link>
        </div>
    );
}

export default FoodCard;