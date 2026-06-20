import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold">🌱 ShareToCare</h2>
          <p className="mt-4 text-gray-200">
            Share surplus food with people in need and help reduce food waste.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link to="/donate">Donate</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link to="/available-food">Available Food</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p>Email: support@sharetocare.com</p>
          <p className="mt-2">Phone: +91 12345 54321</p>
          <p className="mt-2">Tamil Nadu, India</p>
        </div>

      </div>

      <hr className="my-8 border-green-500" />

      <p className="text-center text-gray-200">
        © 2026 ShareToCare. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;