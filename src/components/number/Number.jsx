import React, { useState, useEffect } from 'react';
import numberData from '../../dataJson/number.json';

const Number = () => {
  const [counts, setCounts] = useState(numberData.counters.map(() => 0));

  useEffect(() => {
    const observers = counts.map((_, index) => {
      return new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animateNumber(index);
          }
        },
        { threshold: 0.5 }
      );
    });

    const elements = document.querySelectorAll('.counter-item');
    elements.forEach((el, index) => observers[index].observe(el));

    return () => {
      elements.forEach((el, index) => observers[index].unobserve(el));
    };
  }, []);

  const animateNumber = (index) => {
    const target = numberData.counters[index].number;
    const duration = numberData.counters[index].duration;
    let startTime;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(progress * target);
          return newCounts;
        });
        requestAnimationFrame(animation);
      } else {
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = target;
          return newCounts;
        });
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <section className="py-20 bg-black font-sans text-[16px] leading-[1.875] text-[#A3A3A3]" style={{ WebkitTapHighlightColor: 'transparent' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {numberData.counters.map((counter, index) => (
            <div 
              key={counter.id} 
              className="w-full sm:w-1/2 xl:w-1/4 px-4 mb-8 xl:mb-0 counter-item"
            >
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-normal text-[#A3A3A3]  inline-flex items-center justify-center">
                    <span className="mr-2">[</span>
                    <span>{counts[index]}</span>
                    <span className="ml-1">+</span>
                    <span className="ml-2">]</span>
                  </span>
                </div>
                <h6 className="text-lg font-raleway font-semibold text-white capitalize ">
                  {counter.label}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);
};

export default Number;
