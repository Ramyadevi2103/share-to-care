function About() {
  return (
    <div className="min-h-screen bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-6">
          About ShareToCare
        </h1>

        <p className="text-center text-gray-600 text-lg mb-12">
          ShareToCare is a food donation platform that connects food donors
          with people in need to reduce food waste and fight hunger.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600">
              Our mission is to reduce food waste by making it easy for
              restaurants, hotels, and individuals to donate extra food to
              people who need it.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600">
              We aim to create a hunger-free society where no food is wasted
              and everyone has access to nutritious meals.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;