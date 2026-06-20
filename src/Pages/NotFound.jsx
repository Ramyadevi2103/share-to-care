import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-4">

      <h1 className="text-8xl font-bold text-green-600">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 mt-3 text-center">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
}

export default NotFound;