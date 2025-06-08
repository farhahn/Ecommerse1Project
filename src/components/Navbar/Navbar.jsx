import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaTshirt,
  FaLaptop,
  FaChild,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useState } from "react";

const SidebarLinks = [
  { id: 1, name: "Home", icon: <FaTshirt />, link: "/#" },
  { id: 2, name: "Top Rated", icon: <FaLaptop />, link: "/#services" },
  { id: 3, name: "Kids Wear", icon: <FaChild />, link: "/#" },
  { id: 4, name: "Mens Wear", icon: <FaTshirt />, link: "/#" },
  { id: 5, name: "Electronics", icon: <FaLaptop />, link: "/#" },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white text-black transition-all duration-300">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-sky-100 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex justify-between items-center p-4 border-b border-sky-300">
          <div className="flex items-center gap-3 text-xl font-bold text-sky-700">
            <img src={Logo} alt="Logo" className="w-10" />
            Chlothzy
          </div>
          <FaTimes
            className="text-xl cursor-pointer text-sky-600"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="p-4 flex flex-col gap-4">
          {SidebarLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="flex items-center gap-3 p-3 rounded-md text-sky-800 hover:bg-sky-200 hover:text-sky-900 transition"
              >
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Navbar */}
      <div className="bg-sky-200 py-2 px-4 flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Sidebar toggle & Brand */}
        <div className="flex items-center gap-4">
          <FaBars
            className="text-2xl cursor-pointer text-sky-700"
            onClick={toggleSidebar}
          />
          <div
            className="flex items-center gap-2 cursor-pointer text-xl font-bold text-sky-800"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/");
            }}
          >
            <img src={Logo} alt="Logo" className="w-10 drop-shadow" />
            Chlothzy
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="hidden sm:block relative">
            <input
              type="text"
              placeholder="Search"
              className="w-48 px-4 py-1 rounded-full border border-sky-400 focus:w-64 transition-all bg-white text-black"
            />
            <IoMdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-sky-400" />
          </div>

          {/* Order Button */}
          <Link
            to="/order"
            className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-4 py-1 rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <FaShoppingCart />
            <span className="hidden sm:inline">Order</span>
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-gradient-to-r from-sky-400 to-sky-600 text-white px-4 py-1 rounded-full hover:scale-105 transition-transform"
          >
            Login
          </Link>

          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
