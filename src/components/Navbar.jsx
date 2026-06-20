import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src= "https://res.cloudinary.com/dv4u7rnxk/image/upload/v1781963320/ChatGPT_Image_Jun_20_2026_06_52_44_PM_donfsf.png"
            alt="ShareToCare Logo"
            className="w-20 h-18 object-contain text-xl bg-white rounded-full p-1"
          />
          <h1 className="text-2xl font-bold">ShareToCare</h1>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/available-food">Available Food</Link></li>
          <li><Link to="/my-donations">My Donations</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700">

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-green-800"
          >
            Home
          </Link>

          <Link
            to="/donate"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-green-800"
          >
            Donate
          </Link>

          <Link
            to="/available-food"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-green-800"
          >
            Available Food
          </Link>

          <Link
            to="/my-donations"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-green-800"
          >
            My Donations
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-green-800"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-green-800"
          >
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;