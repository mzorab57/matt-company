import React from "react";
import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo";

const MobileMenuItem = ({ 
  item, 
  activeSubmenu, 
  toggleSubmenu, 
  onClose 
}) => {
  const handleClick = (e) => {
    if (item.title === "Contact") {
      e.preventDefault();
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <li className="font-raleway">
      {item.children ? (
        <div className="border-b border-gray-600 text-xl font-medium text-gray-200">
          <button
            onClick={() => toggleSubmenu(item.title)}
            className="w-full px-4 py-3 flex items-center justify-between  hover:text-primary"
          >
            <span className="font-medium">{item.title}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                activeSubmenu === item.title ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeSubmenu === item.title && (
            <ul className="bg-transparent py-2" data-aos="fade-down" data-aos-duration="400">
              {item.children.map((child, index) => (
                <li key={child.title} data-aos="fade-left" data-aos-delay={index * 100} data-aos-duration="400">
                  <Link
                    to={child.link}
                    className="block px-8 py-2 text-gray-200 hover:text-primary"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      onClose();
                    }}
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <Link
          to={item.link}
          className="block px-4 py-3 text-xl font-medium text-gray-200 hover:text-primary/70 border-b border-gray-600"
          onClick={handleClick}
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};

export default MobileMenuItem;