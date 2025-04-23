import React, { useState } from 'react';
import { FaGraduationCap, FaLaptopCode, FaUsers, FaClock, FaPlay, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import { BsBoxArrowUpRight  } from "react-icons/bs";
import mattSchoolData from '../../dataJson/mattSchool.json';

const OurCourses = () => {
  const [activeVideo, setActiveVideo] = useState(mattSchoolData.videos.mattSchool1);
  
  const icons = {
    graduation: FaGraduationCap,
    laptop: FaLaptopCode,
    users: FaUsers,
    clock: FaClock
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{mattSchoolData.header.title}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">{mattSchoolData.header.description}</p>
        </div>

        {/* Video Gallery */}
        <div className="mb-20">
          <div className="relative rounded-2xl overflow-hidden group mb-6">
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
            {Object.entries(mattSchoolData.videos).map(([key, src]) => (
              <button
                key={key}
                onClick={() => setActiveVideo(src)}
                className={`relative     rounded-lg overflow-hidden aspect-video ${activeVideo === src ? 'ring-2 ring-primary' : ''}`}
              >
                <video 
                  src={src}
                  className="w-full h-full object-cover bg-black"
                  muted
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <FaPlay className={`size-6 ${activeVideo === src ? 'text-primary' : 'text-white'}`} />
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
              <div key={feature.id} className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                <Icon className="text-primary w-12 h-12 mb-6" />
                <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-10 text-center">Available Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mattSchoolData.courses.map(course => (
              <div key={course.id} className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-4">{course.title}</h4>
                <div className="flex items-center space-x-4 mb-4 text-gray-400">
                  <div className="flex items-center">
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <FaChartLine className="w-4 h-4 mr-2" />
                    {course.level}
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{course.description}</p>
                <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;