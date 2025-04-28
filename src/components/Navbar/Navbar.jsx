import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import MenuItem from "./components/MenuItem";
import MobileMenuItem from "./components/MobileMenuItem";
import LanguageSwitcher from "./components/LanguageSwitcher";
import navitemlist from "../../dataJson/navitemlist.json";
import ContactInfo from "./components/ContactInfo";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav className="relative ">
      <div className="container mx-auto px-4  ">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/matt-logo.webp" alt="Logo" className="w-24     scale-150   -translate-y-" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden  md:block">
            <ul className="flex space-x-4">
              {navitemlist.map((item, index) => (
                
                <MenuItem key={index} item={item} />
              ))}
            </ul>
          </nav>

          <div className="flex">
            {/* langyage Info */}
            {/* <LanguageSwitcher /> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-10 backdrop-blur-2xl " data-aos="fade-down">
            <ul className="space-y-2">
              {navitemlist.map((item, index) => (
                <MobileMenuItem
                  key={index}
                  item={item}
                  activeSubmenu={activeSubmenu}
                  toggleSubmenu={toggleSubmenu}
                  onClose={handleMobileMenuClose}
                />
              ))}
              {/* <li className="px-4 py-3 text-black bg-red-300">
                <LanguageSwitcher  />
              </li> */}
              <li>
              <ContactInfo />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
