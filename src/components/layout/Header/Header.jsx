import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed w-full z-50  transition-all duration-300 border-b-2 text-white border-b-gray-500/40 ${
        isSticky ? "shadow-md bg-black/50 " : "bg-transparent"
      }`}
    >
      <Navbar />
    </div>
  );
};

export default Header;
