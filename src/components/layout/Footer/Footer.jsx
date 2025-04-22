import React from 'react';
import { Link } from 'react-router-dom';
import footerData from '../../../dataJson/footer.json';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const socialIcons = {
    facebook: FaFacebookF,
    instagram: FaInstagram
  };

  return (
    <footer className="bg-black/90 text-gray-300 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <img src={footerData.logo} alt="Matt Company" className="w-44 h-40 mb-6" />
            <p className="mb-8 text-lg leading-relaxed">{footerData.description}</p>
            <div className="flex space-x-4">
              {footerData.social.map(item => {
                const Icon = socialIcons[item.icon];
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h6 className="text-white text-2xl font-bold mb-8">Contact Info</h6>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 mt-1 text-primary" />
                <span className="text-lg">{footerData.contacts.address}</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaEnvelope className="w-6 h-6 text-primary" />
                <a href={`mailto:${footerData.contacts.email}`} className="text-lg hover:text-primary transition-colors">
                  {footerData.contacts.email}
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <FaPhone className="w-6 h-6 text-primary" />
                <a href={`tel:${footerData.contacts.phone.replace(/\s/g, '')}`} className="text-lg hover:text-primary transition-colors">
                  {footerData.contacts.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h6 className="text-white text-2xl font-bold mb-8">Our Services</h6>
            <ul className="space-y-4">
              {footerData.latestProjects.map(project => (
                <li key={project.id} className="text-lg">
                  <Link to={project.link} className="hover:text-primary transition-colors duration-300 flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>{project.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Matt Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
