import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuItem = ({ item }) => {
  const { t } = useTranslation();

  console.log(item);
  
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <li className="font-raleway font-medium group py-5 relative h-full">
      {item.children ? (
        <>
          <span className="cursor-pointer h-full flex items-center px-4 hover:text-primary transition-colors duration-300">
            {t(`${item.title}`)}
            <svg
              className="w-4 h-4 ml-2 transform group-hover:rotate-180 transition-transform duration-300"
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
          </span>
          <ul 
            className="invisible py-2 group-hover:visible mt-7 rounded opacity-0 group-hover:opacity-100 absolute top-full w-72 backdrop-blur-xl border border-gray-600 transition-all duration-300 before:content-[''] before:absolute before:top-[-8px] before:left-8 before:w-4 before:h-4 before:bg-gray-600 before:rotate-45 before:-z-10"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {item.children.map((child) => (
              <li key={child.key}>
                <Link
                  to={child.link}
                  className="block px-6 py-3 text-sm hover:text-primary hover:bg-white/5 transition-all duration-300 first:rounded-t-xl last:rounded-b-xl"
                >
                  <div className="flex items-center">
                    {t(`nav.${child.title}`)}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link 
          to={item.link} 
          className="block px-4 hover:text-primary transition-colors duration-300"
        >
          {t(`nav.${item.title.toLowerCase()}`)}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
