import { useEffect, useState } from "react";
import dealsData from "../data/sampleData";
import FoodCard from "../components/FoodCard";

function Deals() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        const savedDeals = JSON.parse(localStorage.getItem("deals")) || [];
        setDeals([...savedDeals, ...dealsData]);
    }, []);

    return (
        <div className="page">
            <h1>Available Deals</h1>
            <p>Grab discounted food before closing time.</p>

            <div className="deals-grid">
                {deals.map((deal) => (
                    <FoodCard key={deal.id} deal={deal} />
                ))}
            </div>
        </div>
    );
}

export default Deals;