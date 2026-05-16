import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "portfolio", label: "Portfolio" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 md:px-20 py-6 flex justify-between items-center text-[#c2926b] transition-all duration-300 ${
        isScrolled ? "bg-[#311e25] shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        to="home"
        spy={true}
        smooth="easeInOutQuart"
        offset={-100}
        duration={300}
        className="text-4xl font-bold cursor-pointer"
      >
        AHMER.
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden min-[889px]:flex gap-6 text-lg">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              spy={true}
              smooth="easeInOutQuart"
              offset={-100}
              duration={300}
              className="hover:text-white cursor-pointer"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Let’s Talk Button (Desktop) */}
      <Link
        to="contact"
        spy={true}
        smooth="easeInOutQuart"
        offset={-100}
        duration={300}
        className="border border-[#c2926b] px-10 py-3 text-sm hover:bg-[#c2926b] hover:text-black transition-all min-[889px]:block hidden cursor-pointer"
      >
        Let’s Talk
      </Link>

      {/* Hamburger Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block min-[889px]:hidden focus:outline-none z-50 relative w-8 h-6"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="absolute w-full h-0.5 bg-[#c2926b] left-0 top-0"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute w-full h-0.5 bg-[#c2926b] left-0 top-1/2 transform -translate-y-1/2"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="absolute w-full h-0.5 bg-[#c2926b] left-0 bottom-0"
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#311e25] bg-opacity-95 flex flex-col items-center justify-center gap-8 text-2xl text-[#c2926b] min-[889px]:hidden z-40"
          >
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                spy={true}
                smooth="easeInOutQuart"
                offset={-100}
                duration={300}
                className="hover:text-white transition-all duration-200 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth="easeInOutQuart"
              offset={-100}
              duration={300}
              className="border border-[#c2926b] px-10 py-3 text-sm hover:bg-[#c2926b] hover:text-black transition-all cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Let’s Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
