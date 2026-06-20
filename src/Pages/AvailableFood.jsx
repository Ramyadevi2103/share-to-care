import { useEffect, useState } from "react";

function AvailableFood() {
    const [donations, setDonations] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("donations")) || [];
        setDonations(data);
    }, []);

    const handleDelete = (index) => {
        const updatedDonations = donations.filter(
            (_, i) => i !== index
        );

        setDonations(updatedDonations);

        localStorage.setItem(
            "donations",
            JSON.stringify(updatedDonations)
        );
    };

    const handleClaim = (index) => {

        const updatedData = [...donations];

        updatedData[index].status = "Claimed";

        setDonations(updatedData);

        localStorage.setItem(
            "donations",
            JSON.stringify(updatedData)
        );

    };

    const filteredData = donations.filter((item) =>
        item.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-green-50 py-10">

            <div className="max-w-7xl mx-auto px-8">

                <h1 className="text-4xl font-bold text-center mb-8">
                    Available Food
                </h1>

                <input
                    type="text"
                    placeholder="Search by Location..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border p-3 rounded-lg mb-8"
                />

                <div className="grid md:grid-cols-3 gap-6">

                    {filteredData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <h2 className="text-2xl font-bold">
                                {item.foodName}
                            </h2>

                            <p className="mt-2">
                                <strong>Donor:</strong> {item.donorName}
                            </p>

                            <p>
                                <strong>Quantity:</strong> {item.quantity}
                            </p>

                            <p>
                                <strong>Location:</strong> {item.location}
                            </p>

                            <p>
                                <strong>Contact:</strong> {item.contact}
                            </p>
                            <p className="mt-3">

                                <strong>Status :</strong>

                                {item.status || "Available"}

                            </p>

                            <div className="flex gap-3 mt-5">

                                <button
                                    onClick={() => handleClaim(index)}
                                    className="w-full bg-green-600 text-white py-2 rounded-lg"
                                >
                                    Claim Food
                                </button>

                                <button
                                    onClick={() => handleDelete(index)}
                                    className="w-full bg-red-500 text-white py-2 rounded-lg"
                                >
                                    Delete
                                </button>

                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default AvailableFood;