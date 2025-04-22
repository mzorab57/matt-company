import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../dataJson/services.json';
import HeaderText from '../ui/HeaderText';

const OurServices = () => {
  const { sectionTitle, services } = servicesData;

  return (
    <section className="  font-raleway text-[16px] leading-[1.875] bg-black py-12 text-gray-custom">
      <div className="container place-self-center px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gray-custom uppercase tracking-wider text-sm mb-3 block">
            [ {sectionTitle.label} ]
          </span>
          
          <HeaderText header={sectionTitle.heading} />
         
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center -mx-4">
          {services.map((service) => (
            <div key={service.id} className="w-full sm:w-1/2 xl:w-1/3 px-4 mb-[30px]">
              <div 
                className="icon-box text-center py-[37px] px-[60px]  relative overflow-hidden select-none bg-transparent group transition-all duration-300"
                style={{
                  backgroundImage: `url(${service.bgIcon})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTextSizeAdjust: '100%',
                }}
              >
                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 mx-auto"
                    draggable="false"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h5 className="text-xl font-[400] mb-4 text-white">
                    <Link to={service.link}>
                      {service.title}
                    </Link>
                  </h5>
                  <p className="text-white/50 mb-6 break-words leading-[1.875] text-[16px]">
                    {service.description}
                  </p>
                </div>

                {/* Link */}
                <div className="relative z-10">
                  <Link 
                    to={service.link}
                    className="inline-block text-sm font-[400] text-white"
                  >
                    READ MORE
                  </Link>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
