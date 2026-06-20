import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Donate() {
    const [formData, setFormData] = useState({
        donorName: "",
        foodName: "",
        quantity: "",
        location: "",
        contact: "",
        expiry: "",
    });
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingData =
            JSON.parse(localStorage.getItem("donations")) || [];

        existingData.push(formData);

        localStorage.setItem(
            "donations",
            JSON.stringify(existingData)
        );

        setShowModal(true);

        setFormData({
            donorName: "",
            foodName: "",
            quantity: "",
            location: "",
            contact: "",
            expiry: "",
        });

        setTimeout(() => {
            navigate("/available-food");
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-green-50 py-10">
            {showModal && (
                <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center">

                    <div className="bg-white p-8 rounded-xl shadow-xl w-96 text-center">

                        <h2 className="text-3xl font-bold text-green-600 mb-4">
                            🎉 Donation Successful!
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Thank you for helping reduce food waste.
                        </p>

                        <div className="flex gap-4">

                            <button
                                onClick={() => navigate("/available-food")}
                                className="w-full bg-green-600 text-white py-2 rounded-lg"
                            >
                                View Donations
                            </button>

                        </div>

                    </div>

                </div>
            )}
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">

                <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
                    Donate Food
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                        type="text"
                        name="donorName"
                        placeholder="Donor Name"
                        value={formData.donorName}
                        onChange={handleChange}
                        required
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="text"
                        name="foodName"
                        placeholder="Food Name"
                        required
                        value={formData.foodName}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="text"
                        name="quantity"
                        placeholder="Quantity"
                        value={formData.quantity}
                        required
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact Number"
                        value={formData.contact}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="datetime-local"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        required
                        className="w-full border p-3 rounded-lg"
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg"
                    >
                        Donate Now
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Donate;