import { useContext, useState } from "react";
import { IoNotifications, IoPerson } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Pages/AuthPages/Firebase/AuthProvider";
import { TbLayoutDashboardFilled, TbLogout2 } from "react-icons/tb";
import Banner from "../Pages/Home/Banner/Banner";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
    navigate("/Login");
  };
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  return (
    <>
      <nav className="bg-teal text-white px-5 lg:py-2 md:p-3 py-4 shadow-md mb-3 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-semibold flex items-center gap-2">
            <span className="text-3xl md:text-4xl lg:text-5xl">
              <MdOutlineDeliveryDining />
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl">DelivX</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-orange">
              Home
            </Link>
            <Link to="/About" className="hover:text-orange">
              About
            </Link>
            <Link to="/Services" className="hover:text-orange">
              Services
            </Link>
            <Link to="/Contact" className="hover:text-orange">
              Contact
            </Link>
          </div>

          <div className="flex gap-3 items-center text-lg lg:text-2xl">
            <IoNotifications />
            {user ? (
              // Avatar and Dropdown
              <div className="relative">
                <div onClick={toggleDropdown} className="avatar cursor-pointer">
                  <div className=" w-7 h-7 lg:w-8 lg:h-8   rounded-full ">
                    <img
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co.com/cYnd8K9/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-vector-il.jpg"
                      }
                      alt="User Avatar"
                    />
                  </div>
                </div>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-10 border-b border-l w-64 bg-teal rounded-lg shadow-lg z-10">
                    <div className="px-4 py-2 text-base font-semibold">
                      {user.displayName || "User"}
                    </div>
                    <hr />
                    <Link
                      to="/UserProfile"
                      className="flex gap-2 items-center text-base px-4 py-2 hover:bg-orange text-white"
                    >
                      <IoPerson />
                      Profile
                    </Link>
                    <Link
                      to="/Dashboard"
                      className="flex gap-2 items-center text-base px-4 py-2 hover:bg-orange text-white"
                    >
                      <TbLayoutDashboardFilled />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex gap-2 items-center w-full text-base text-left px-4 py-2 hover:bg-orange text-white"
                    >
                      <TbLogout2 />
                      Logout
                    </button>
                  </div>
                )}{" "}
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
      {isHomepage && <Banner />}
    </>
  );
};

export default Navbar;
