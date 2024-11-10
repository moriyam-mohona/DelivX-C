import { useContext, useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../Pages/AuthPages/Firebase/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const { user, signout } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    signout()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <nav className="bg-teal text-white px-5 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold flex items-center gap-2">
          <span className="text-5xl">
            <MdOutlineDeliveryDining />
          </span>
          <h2 className="text-3xl">DelivX</h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/About" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/Services" className="hover:text-gray-200">
            Services
          </Link>
          <Link to="/Contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>

        {/* Right Side (Notifications and Login/Avatar) */}
        <div className="flex gap-3 items-center text-lg lg:text-2xl">
          <IoNotifications />
          {user ? (
            // Avatar and Dropdown
            <div className="relative">
              <div onClick={toggleDropdown} className="avatar cursor-pointer">
                <div className=" w-10 h-10 rounded-full ">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="User Avatar"
                  />
                </div>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10">
                  <div className="px-4 py-2 text-sm font-semibold">
                    {user.displayName}
                  </div>
                  <hr />
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/Login" className="text-lg">
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-teal p-4`}>
        <Link to="/" className="block py-2 px-4 text-white hover:bg-teal-700">
          Home
        </Link>
        <Link
          to="/About"
          className="block py-2 px-4 text-white hover:bg-teal-700"
        >
          About
        </Link>
        <Link
          to="/Services"
          className="block py-2 px-4 text-white hover:bg-teal-700"
        >
          Services
        </Link>
        <Link
          to="/Contact"
          className="block py-2 px-4 text-white hover:bg-teal-700"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
