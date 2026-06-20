function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-gray-800">
          Why Choose ShareToCare?
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Together, we can reduce food waste and help people in need.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-5xl">🌱</div>
            <h3 className="text-xl font-semibold mt-4">
              Reduce Food Waste
            </h3>
            <p className="text-gray-600 mt-2">
              Save surplus food from being wasted.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-5xl">❤️</div>
            <h3 className="text-xl font-semibold mt-4">
              Help the Hungry
            </h3>
            <p className="text-gray-600 mt-2">
              Provide meals to people who need them.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-5xl">⚡</div>
            <h3 className="text-xl font-semibold mt-4">
              Easy Donation
            </h3>
            <p className="text-gray-600 mt-2">
              Donate food quickly with a simple process.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-5xl">🤝</div>
            <h3 className="text-xl font-semibold mt-4">
              Community Support
            </h3>
            <p className="text-gray-600 mt-2">
              Connect donors, NGOs, and volunteers together.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;