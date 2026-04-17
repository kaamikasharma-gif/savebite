import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <h1>Reduce Food Waste, Save Money</h1>
                <p>
                    SaveBite connects restaurants with customers by offering surplus food
                    at discounted prices before closing time.
                </p>

                <div className="hero-buttons">
                    <Link to="/deals" className="btn">
                        View Deals
                    </Link>

                    <Link to="/dashboard" className="btn secondary">
                        Restaurant Dashboard
                    </Link>
                </div>
            </div>

            <div className="stats">
                <div className="card">
                    <h2>120+</h2>
                    <p>Meals Saved</p>
                </div>

                <div className="card">
                    <h2>35+</h2>
                    <p>Partner Restaurants</p>
                </div>

                <div className="card">
                    <h2>₹15,000+</h2>
                    <p>Customer Savings</p>
                </div>
            </div>
        </div>
    );
}

export default Home;