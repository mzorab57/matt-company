import React from 'react';
import mattModelData from '../../dataJson/mattModel.json';
import HeaderText from '../ui/HeaderText';

const MattModelBody = () => {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-b from-gray-900 to-black">
      {/* Decorative elements */}
      <div className="w-48 h-48 md:w-72 md:h-72 bg-primary/15 rounded-full blur-3xl animate-pulse absolute end-0"></div>
      <div className="w-64 h-64 md:w-96 md:h-96 bg-primary/15 rounded-full blur-3xl animate-pulse absolute start-20"></div>

      {/* Decorative elements */}
      <div className="w-48 h-48 md:w-72 md:h-72 bg-primary/15 rounded-full blur-3xl animate-pulse absolute end-0 top-1/2"></div>
     

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Main Title */}
        <div className="text-lg sm:text-xl mb-10 md:mb-16    md:text-left">
          <HeaderText header={mattModelData.body.mainTitle} />
          <p className="text-gray-300 mt-4 md:mt-6 max-w-4xl text-sm sm:text-base">
            {mattModelData.body.intro}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {mattModelData.body.sections.map((section, index) => (
            <div 
              key={index} 
              className="group border bg-white/5 border-gray-500 backdrop-blur-3xl p-4 sm:p-6 lg:p-8 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute -top-10 -right-10 w-16 sm:w-20 h-16 sm:h-20 bg-primary/100 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-300"></div>
              
              {/* Service Image */}
              <div className="mb-4 sm:mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img
                  src={`/assets/images/mattModel/model${index + 1}.webp`}
                  alt={section.title}
                  className="w-full h-32 sm:h-40 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Service Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-4 relative">
                <span className="text-gray-100 text-4xl sm:text-5xl md:text-6xl font-bold absolute -right-2 -top-3 opacity-20">0{index + 1}</span>
                {section.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MattModelBody;
