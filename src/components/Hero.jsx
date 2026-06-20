import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-green-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Don't Waste Food, <br />
            Share It With Care.
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            ShareToCare connects food donors with people in need,
            helping reduce food waste and fight hunger.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/donate"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Donate Food
            </Link>

            <Link
              to="/available-food"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white"
            >
              Find Food
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
            alt="Food Donation"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;