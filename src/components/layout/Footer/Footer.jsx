import React from 'react';
import { Link } from 'react-router-dom';
import footerData from '../../../dataJson/footer.json';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const socialIcons = {
    facebook: FaFacebookF,
    twitter: FaTwitter,
    linkedin: FaLinkedinIn,
    instagram: FaInstagram
  };

  return (
    <footer className="bg-dark text-gray-300 py-44">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={footerData.logo} alt="Logo" className="h-12 mb-6" />
            <p className="mb-6">{footerData.description}</p>
            <div className="flex space-x-4">
              {footerData.social.map(item => {
                const Icon = socialIcons[item.icon];
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h6 className="text-white text-lg font-semibold mb-6">Contacts</h6>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 text-primary" />
                <span>{footerData.contacts.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-primary" />
                <span>{footerData.contacts.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-primary" />
                <span>{footerData.contacts.phone}</span>
              </li>
            </ul>
          </div>

          {/* Latest Projects */}
          <div>
            <h6 className="text-white text-lg font-semibold mb-6">Latest Projects</h6>
            <ul className="space-y-3">
              {footerData.latestProjects.map(project => (
                <li key={project.id}>
                  <Link to={project.link} className="hover:text-primary transition-colors">
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h6 className="text-white text-lg font-semibold mb-6">Subscribe</h6>
            <form className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="w-full bg-transparent border border-gray-600 rounded-full py-3 px-5 focus:outline-none focus:border-primary"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dark transition-colors"
                >
                  <FaPaperPlane className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
            <p>Follow our newsletter to stay updated about agency.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
