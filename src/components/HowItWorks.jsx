function HowItWorks() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-gray-800">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Donate surplus food in just three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <div className="text-5xl mb-4">🍱</div>
            <h3 className="text-2xl font-semibold">
              Donate Food
            </h3>
            <p className="mt-3 text-gray-600">
              Fill in the food details and submit your donation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-semibold">
              Connect
            </h3>
            <p className="mt-3 text-gray-600">
              Nearby NGOs and volunteers can view your donation.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-semibold">
              Share & Help
            </h3>
            <p className="mt-3 text-gray-600">
              Food reaches people instead of being wasted.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;