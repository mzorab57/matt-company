import React from 'react';
import { Link } from 'react-router-dom';
import aboutData from '../../dataJson/aboutUs.json';

const AboutUs = () => {
  const { mainContent, images } = aboutData;
  
  return (
    <section className="About Us relative bg-black/90 overflow-hidden">
        {/* Left Tower */}
        <img 
          src="/assets/images/svgImage/tower.svg" 
          alt="Tower Left" 
          className="absolute  -translate-x-32 top-1/2 -translate-y-1/2 h-screen opacity-10 z-0 lg:animate-pulse"
        />
        
        {/* Background Image */}
        <div 
          className="absolute hidden xl:block bottom-0 right-0 w-[40%] h-[80%] z-0 animate-pulse"
          style={{
            backgroundImage: 'url(https://tawelaceramic.com/assets/images/aboutBg/about_pat.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.1'
          }}
        />
        
        <div className="flex flex-col xl:flex-row xl:items-center container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 gap-x-14 pt-10 relative z-10">
          {/* Content Section */}
          <div className="xl:w-3/4">
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
              {mainContent.title}
            </h1>
            <p 
              className="text-base sm:text-lg text-gray-300/90 font-semibold leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {mainContent.description}
            </p>
            <Link 
              to="/about"
              className="inline-block py-6 text-white/50 hover:text-gray-600 font-semibold transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {mainContent.readMore}
            </Link>
          </div>

          {/* Image Section */}
          <div className="">
            <img 
              className="w-full h-auto object-cover brightness-75 translate-x-10"
              src={images.mainImage}
              alt="About Matt Company"
              data-aos="fade-left"
              data-aos-delay="300"
            />
          </div>
        </div>
    </section>
  );
};

export default AboutUs;
