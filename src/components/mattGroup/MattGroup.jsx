import React, { useEffect, useState } from 'react';
import mattGroupData from '../../dataJson/mattGroup.json';

const MattGroup = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-bl from-white/15   to-transparent font-raleway overflow-hidden">
      {/* Left Tower */}
      <img 
        src="/assets/images/svgImage/tower.svg" 
        alt="Tower Left" 
        className="absolute left-0  h-[50%]  opacity-20"
        style={{ transform: `translate(0, ${scrollY * 0.2}px)` }}
      />
      
      {/* Right Tower */}
      <img 
        src="/assets/images/svgImage/tower.svg" 
        alt="Tower Right" 
        className="absolute right-0  h-[50%] opacity-20"
        style={{ transform: `translate(0, ${scrollY * 0.2}px)` }}
      />
      
      {/* Existing content */}
      {mattGroupData.divisions.map((division, index) => (
        <div 
          key={division.id}
          className="container mx-auto px-4 mb-20 last:mb-0"
        >
          <div className={`flex flex-col lg:flex-row items-center  gap-12 ${
            division.name === "Matt Furnishing" ? "lg:flex-row-reverse" : ""
          }`}>
            {/* Video Section */}
            <div className="lg:w-1/2 relative">
              <div className="relative overflow-hidden border-4 border-white/20">
                <video 
                  className="max-w-full w-screen h-[400px] object-cover"
                  autoPlay
                  preload="auto"
                  muted
                  loop
                  playsInline
                  // Added playsinline attribute without capital I for better iOS compatibility
                  webkit-playsinline="true"
                  // Added controls as fallback for iOS
                  controls
                >
                  <source src={division.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>

            {/* Content Section remains unchanged */}
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-custom text-2xl  mb-2">{division.name}</h3>
                  
                  <h1 
              className="text-3xl  sm:text-3xl lg:text-5xl font-bold text-black"
              data-aos="fade-up"
              data-aos-duration="600"
              style={{
                // margin: '10px 0 20px',
                WebkitTextFillColor: 'transparent',
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#fff',
                marginBottom: '20px',
                // fontSize: '40px',
                lineHeight: '55px',
                color: '#0d0845',
                fontFamily: 'Jost, sans-serif'
              }}
            >
              {division.title}
              
            </h1>
                  {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2> */}
                  <p className="text-gray-400 leading-relaxed">{division.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {division.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center space-x-3 text-white"
                    >
                      <span className="w-2 h-2 bg-gray-custom rounded-full "></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MattGroup;
