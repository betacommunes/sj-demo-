import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import LoginModal from "../../LoginSignup/LoginModal";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [shadow, setShadow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const menu = () => setToggle(!toggle);

  const handleScroll = () => setShadow(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/product", label: "Shop" },
    { path: "/contact", label: "Contact" },
  ];

  const handleLoginClick = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCartItems = Object.values(cartItems).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  return (
    <div
      className={`top-0 z-50 w-full fixed transition-shadow duration-300 ${
        shadow ? "shadow-md bg-white/95 backdrop-blur-md" : "bg-[#FFFDF8]"
      }`}
    >
      <nav className="h-16 py-2 px-4 md:px-20 flex items-center justify-between text-[#3B3A2F]">
        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center text-3xl cursor-pointer">
          {toggle ? (
            <HiOutlineMenuAlt1 onClick={menu} />
          ) : (
            <IoClose onClick={menu} />
          )}
        </div>

        {/* Brand Logo */}
<div className="logo font-bold text-2xl md:text-3xl tracking-wider">
  <NavLink to="/" className="font-playfair italic">
    <span className="text-[#C9A54A]">Golden</span>
    <span className="text-[#B97B3C] font-serif">Roots</span>
  </NavLink>
</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-[15px] font-semibold">
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block cursor-pointer border-b-2 py-1 duration-300 ${
                    isActive
                      ? "text-primary border-primary"
                      : "text-[#3B3A2F] border-transparent hover:text-primary"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Navbar Icons */}
        <div className="flex items-center gap-3 md:gap-6 text-xl">
          <FiSearch className="cursor-pointer hover:text-primary transition-colors" />

          {/* Cart */}
          <NavLink to="/cart" className="relative">
            <HiOutlineShoppingBag className="cursor-pointer hover:text-primary transition-colors" />
            <div className="absolute -top-2 -right-2 w-4 h-4 text-xs font-medium flex justify-center items-center bg-primary text-white rounded-full">
              {totalCartItems}
            </div>
          </NavLink>

          {/* User/Login */}
          <FaRegUser
            onClick={handleLoginClick}
            className="cursor-pointer hover:text-primary transition-colors"
          />
          {showLogin && (
            <LoginModal isOpen={showLogin} onClose={handleCloseLogin} />
          )}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden absolute bg-[#FFFDF8] w-full text-[#3B3A2F] transition-transform duration-500 ${
          toggle ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <ul className="py-6 space-y-5 flex flex-col items-center font-semibold">
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={menu}
                className={({ isActive }) =>
                  `block cursor-pointer border-b-2 py-2 duration-300 ${
                    isActive
                      ? "text-primary border-primary"
                      : "text-[#3B3A2F] border-transparent hover:text-primary"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
