import React from 'react';
import mattGroupData from '../../dataJson/mattGroup.json';

const MattGroup = () => {
  return (
    <section className="py-20 bg-black font-raleway">
      {mattGroupData.divisions.map((division, index) => (
        <div 
          key={division.id}
          className="container mx-auto px-4 mb-20 last:mb-0"
        >
          <div className={`flex flex-col lg:flex-row items-center gap-12 ${
            division.name === "Matt Furnishing" ? "lg:flex-row-reverse" : ""
          }`}>
            {/* Video Section */}
            <div className="lg:w-1/2 relative">
              <div className="relative overflow-hidden ">
                <video 
                  className="w-full h-[500px] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
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
                  <h3 className="text-primary text-lg mb-2">{division.name}</h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{division.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{division.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {division.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center space-x-3 text-white"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
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
