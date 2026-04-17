import { useState } from "react";

function Dashboard() {
    const [form, setForm] = useState({
        item: "",
        restaurant: "",
        oldPrice: "",
        newPrice: "",
        time: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existing = JSON.parse(localStorage.getItem("deals")) || [];

        const newDeal = {
            id: Date.now(),
            item: form.item,
            restaurant: form.restaurant,
            oldPrice: form.oldPrice,
            newPrice: form.newPrice,
            time: form.time
        };

        localStorage.setItem("deals", JSON.stringify([...existing, newDeal]));

        alert("Listing Added Successfully!");

        setForm({
            item: "",
            restaurant: "",
            oldPrice: "",
            newPrice: "",
            time: ""
        });
    };

    return (
        <div className="page">
            <h1>Restaurant Dashboard</h1>
            <p>Add today's unsold food deals</p>

            <form className="listing-form" onSubmit={handleSubmit}>
                <input type="text" name="item" placeholder="Food Item Name" value={form.item} onChange={handleChange} />
                <input type="text" name="restaurant" placeholder="Restaurant Name" value={form.restaurant} onChange={handleChange} />
                <input type="number" name="oldPrice" placeholder="Original Price" value={form.oldPrice} onChange={handleChange} />
                <input type="number" name="newPrice" placeholder="Discount Price" value={form.newPrice} onChange={handleChange} />
                <input type="text" name="time" placeholder="Time Left" value={form.time} onChange={handleChange} />

                <button className="btn">Add Listing</button>
            </form>
        </div>
    );
}

export default Dashboard;