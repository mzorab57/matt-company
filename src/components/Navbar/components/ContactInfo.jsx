import React from 'react';
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="backdrop-blur-lg ">
      <div className="container mx-auto text-center  px-6 py-6">
        <div className="flex flex-col md:flex-row justify-center   items-center gap-6">
          {/* Contact Details */}
          <div className="flex  flex-wrap gap-8 items-center">
            <div className="flex  items-center gap-3 group">
              {/* <FaMapMarkerAlt className="text-primary/80 text-xl" /> */}
              <span className="font-raleway text-sm text-gray-400">
                Ashty Street, As Sulaymaniyah, Iraq
              </span>
            </div>

            <div className=" group">
              {/* <FaEnvelope className="text-primary/80 text-xl" /> */}
              <a href="mailto:info@mattiraq.com" 
                 className="font-raleway text-sm text-gray-400 hover:text-primary/80">
                info@mattiraq.com
              </a>
            </div>

            <div className="flex items-center gap-3 group">
              {/* <FaPhone className="text-primary/80 text-xl" /> */}
              <a href="tel:+9647725286029" 
                 className="font-sans text-sm text-gray-400 hover:text-primary/80">
                +964 772 528 6029
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 place-self-start">
            <a href="https://instagram.com/your-handle" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-primary/80 text-xl">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/your-page" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-primary/80 text-xl">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;