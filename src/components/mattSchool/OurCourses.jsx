import React, { useState } from 'react';
import { FaGraduationCap, FaLaptopCode, FaUsers, FaClock, FaPlay, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import { BsBoxArrowUpRight  } from "react-icons/bs";

import mattSchoolData from '../../dataJson/mattSchool.json';
import HeaderText from '../ui/HeaderText';

const OurCourses = () => {
  const [activeVideo, setActiveVideo] = useState(mattSchoolData.videos.mattSchool1.video);
  
  const icons = {
    graduation: FaGraduationCap,
    laptop: FaLaptopCode,
    users: FaUsers,
    clock: FaClock
  };

  return (
    <section className="py-20 bg-black font-raleway">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-start mb-16 ">
          <HeaderText header={mattSchoolData.header.title} />
          <p className="text-gray-400 text-2xl max-w-2xl ">{mattSchoolData.header.description}</p>
        </div>

        {/* Video Gallery */}
        <div className="mb-20">
          <div className="relative rounded overflow-hidden group mb-6">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 ">
              <div className="flex flex-col lg:flex-row items-start space-x-4">
                <button 
                  className="size-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
                <div className=''>
                  <h3 className="lg:text-3xl text-xl font-semibold text-white mb-2">Learn Architecture with Us</h3>
                  <p className="text-gray-300 text-xs lg:text-lg">Join our comprehensive courses and become a professional architect</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(mattSchoolData.videos).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveVideo(data.video)}
                className={`relative rounded overflow-hidden aspect-video ${activeVideo === data.video ? 'ring-2 ring-primary/50' : ''}`}
              >
                <img
                  src={data.poster}
                  alt={`Video thumbnail ${key}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <FaPlay className={`size-6 ${activeVideo === data.video ? 'text-primary' : 'text-white'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mattSchoolData.features.map(feature => {
            const Icon = icons[feature.icon];
            return (
              <div key={feature.id} className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm border border-white/10">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded p-4 mb-6 w-fit">
                  <Icon className="text-primary w-12 h-12 transform hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Courses */}
        <div>
          <HeaderText header={["Available Courses"]} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
            {mattSchoolData.courses.map(course => (
              <div key={course.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded p-8 hover:bg-white/15 transition-all duration-500 group backdrop-blur-sm border border-white/10 hover:shadow-2xl hover:shadow-primary/20">
                
                <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">{course.title}</h4>
                <div className="flex items-center space-x-6 mb-6 text-gray-400">
                  <div className="flex items-center bg-white/5 px-4 py-2 rounded-full">
                    <FaCalendarAlt className="w-5 h-5 mr-2 text-primary" />
                    {course.duration}
                  </div>
                  <div className="flex items-center bg-white/5 px-4 py-2 rounded-full">
                    <FaChartLine className="w-5 h-5 mr-2 text-primary" />
                    {course.level}
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

export default OurCourses;