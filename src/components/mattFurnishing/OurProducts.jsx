import React, { useState } from 'react';
import { FaPlay, FaAward, FaPalette, FaHeadset, FaTruck, FaCalendarAlt, FaTag, FaChartLine } from 'react-icons/fa';
import { BsBoxArrowUpRight  } from "react-icons/bs";

import mattFurnishingData from '../../dataJson/mattFurnishing.json';
import HeaderText from '../ui/HeaderText';

const OurProducts = () => {
  const [activeVideo, setActiveVideo] = useState(mattFurnishingData.videos.mattFurnishing1);
  
  const icons = {
    quality: FaAward,
    design: FaPalette,
    support: FaHeadset,
    delivery: FaTruck
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
            <HeaderText   header={mattFurnishingData.header.title} />
          <p className="text-gray-400 font-raleway text-lg max-w-4xl mx-auto leading-relaxed">{mattFurnishingData.header.description}</p>
        </div>

        {/* Video Gallery */}
        <div className="mb-20">
          <div className="relative roundedl overflow-hidden group mb-6">
            <video 
              className="w-full h-[700px] object-contain bg-black"
              autoPlay
              muted
              loop
              src={activeVideo}
              id="mainVideo"
              controlsList="nodownload"
            //   controls
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 p-">
              <div className="flex flex-col lg:flex-row items-start space-x-4">
                <button 
                  className="size-12 rounded-full bg-danger flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  onClick={() => {
                    const video = document.getElementById('mainVideo');
                    video.style.objectFit = 'contain';
                    if (video.requestFullscreen) {
                      video.requestFullscreen();
                    } else if (video.webkitRequestFullscreen) {
                      video.webkitRequestFullscreen();
                    } else if (video.msRequestFullscreen) {
                      video.msRequestFullscreen();
                    }
                  }}
                >
                 <BsBoxArrowUpRight  className="size-6 text-white ml-1" />
                </button>
                <div>
                  <h3 className="lg:text-3xl text-xl font-semibold text-white mb-2">Premium Home Solutions</h3>
                  <p className="text-gray-300 text-xs lg:text-lg">Discover our collection of high-quality home furnishings</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(mattFurnishingData.videos).map(([key, src]) => (
              <button
                key={key}
                onClick={() => setActiveVideo(src)}
                className={`relative rounded overflow-hidden aspect-video ${activeVideo === src ? 'ring-2 ring-danger' : ''}`}
              >
                <video 
                  src={src}
                  className="w-full h-full object-cover bg-black"
                  muted
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <FaPlay className={`w-8 h-8 ${activeVideo === src ? 'text-danger' : 'text-white'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mattFurnishingData.features.map(feature => {
            const Icon = icons[feature.icon];
            return (
              <div key={feature.id} className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-datext-danger/20 backdrop-blur-sm border border-white/10">
                <div className="bg-gradient-to-br from-datext-danger/20 to-datext-danger/10 rounded p-4 mb-6 w-fit">
                  <Icon className="text-danger w-12 h-12 transform hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-danger to-white bg-clip-text text-transparent">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Products */}
        <div>
          <HeaderText header={["Our Products"]} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
            {mattFurnishingData.products.map(course => (
              <div key={course.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded p-8 hover:bg-white/15 transition-all duration-500 group backdrop-blur-sm border border-white/10 hover:shadow-2xl hover:shadow-danger/20">
                
                <h4 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-danger to-white bg-clip-text text-transparent">{course.title}</h4>
                <div className="flex items-center space-x-6 mb-6 text-gray-400">
                  <div className="flex items-center bg-white/5 px-4 py-2 rounded-full">
                    <FaCalendarAlt className="w-5 h-5 mr-2 text-danger" />
                    {course.title}
                  </div>
                  <div className="flex items-center bg-white/5 px-4 py-2 rounded-full">
                    <FaChartLine className="w-5 h-5 mr-2 text-danger" />
                    {course.category}
                  </div>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed">{course.description}</p>
           
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;