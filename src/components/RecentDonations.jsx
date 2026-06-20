function RecentDonations() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-gray-800">
          Recent Donations
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Recently donated food available for pickup.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold">🍛 Veg Meals</h3>

            <p className="mt-3 text-gray-600">
              Quantity: 50 Plates
            </p>

            <p className="text-gray-600">
              Location: Trichy
            </p>

            <p className="text-green-600 font-semibold mt-2">
              Status: Available
            </p>

            <button className="mt-5 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              View Details
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold">🍞 Bread & Snacks</h3>

            <p className="mt-3 text-gray-600">
              Quantity: 30 Packs
            </p>

            <p className="text-gray-600">
              Location: Coimbatore
            </p>

            <p className="text-green-600 font-semibold mt-2">
              Status: Available
            </p>

            <button className="mt-5 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              View Details
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold">🍎 Fruits</h3>

            <p className="mt-3 text-gray-600">
              Quantity: 20 Boxes
            </p>

            <p className="text-gray-600">
              Location: Chennai
            </p>

            <p className="text-green-600 font-semibold mt-2">
              Status: Available
            </p>

            <button className="mt-5 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              View Details
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default RecentDonations;