function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-green-100 p-6 rounded-xl text-center shadow">
          <h1 className="text-4xl font-bold text-green-600">500+</h1>
          <p className="mt-2 text-gray-700">Food Donations</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl text-center shadow">
          <h1 className="text-4xl font-bold text-green-600">250+</h1>
          <p className="mt-2 text-gray-700">Families Helped</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl text-center shadow">
          <h1 className="text-4xl font-bold text-green-600">100+</h1>
          <p className="mt-2 text-gray-700">Volunteers</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl text-center shadow">
          <h1 className="text-4xl font-bold text-green-600">50+</h1>
          <p className="mt-2 text-gray-700">Partner NGOs</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;