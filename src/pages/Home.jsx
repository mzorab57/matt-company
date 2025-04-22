import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgHome from '../utils/bgHome';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgHome.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden opacity-90 brightne">
      {/* Animated Lines */}
      <div className="absolute inset-0 flex justify-around z-10">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative">
            {/* Static Gray Line */}
            <div className="absolute w-[3px] h-full bg-gray-500 opacity-30 " />
            
            {/* Animated vpribg-primary */}
            <div
              className="absolute w-[5px] bg-primary/80  shadow-lg shadow-pribg-primary/50"
              style={{
                animation: `lineMove 13s linear infinite ${index * 1}s`,
                transformOrigin: 'top',
                position: 'absolute',
                top: '0',
                height: '15px'
              }}
            />
          </div>
        ))}
      </div>

      {/* Hero Slider */}
      <div className="relative h-full ">
        {bgHome.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="container mx-auto h-full flex items-center justify-center text-center">
              <div className="text-white z-20">
                <h2 
                  className="xl:text-6xl text-4xl font-semibold animate-fadeIn" 
                  style={{
                    margin: '10px 0 20px',
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
                 Welcome to <br/>Matt Company
                </h2>
                <Link
                  to="/about"
                  className="inline-block px-8 py-3 bg-primary/70 text-white font-medium border border-gray-400  hover:bg-primary transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;