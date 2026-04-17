import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <h1>Save Food. Save Money. Save Earth.</h1>

                    <p>
                        SaveBite helps restaurants sell surplus food at discounted prices
                        before closing time. Affordable meals for customers, less waste for
                        the planet.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/deals" className="btn">
                            Explore Deals
                        </Link>

                        <Link to="/dashboard" className="btn secondary">
                            Partner Restaurant
                        </Link>
                    </div>
                </div>
            </section>

            <section className="stats container">
                <div className="card">
                    <h2>120+</h2>
                    <p>Meals Saved</p>
                </div>

                <div className="card">
                    <h2>35+</h2>
                    <p>Restaurants Joined</p>
                </div>

                <div className="card">
                    <h2>₹15,000+</h2>
                    <p>Total Savings</p>
                </div>
            </section>
        </div>
    );
}

export default Home;