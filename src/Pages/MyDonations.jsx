import { useEffect, useState } from "react";

function MyDonations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("donations")) || [];
    setDonations(data);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-8">
      <h1 className="text-4xl font-bold mb-8">
        My Donations
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {donations.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-5"
          >
            <h2 className="text-2xl font-bold">
              {item.foodName}
            </h2>

            <p>Donor: {item.donorName}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Location: {item.location}</p>
            <p>Status: {item.status || "Available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyDonations;