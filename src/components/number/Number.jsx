import React, { useState, useEffect, useRef } from 'react';
import numberData from '../../dataJson/number.json';
import progressData from '../../dataJson/progress.json';

const Number = () => {
  const [counts, setCounts] = useState(numberData.counters.map(() => 0));
  const canvasRefs = useRef(progressData.circles.map(() => React.createRef()));

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

    // Draw progress circles
    const drawCircle = (canvas, percentage) => {
      const ctx = canvas.getContext('2d');
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 70;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw progress arc
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, -0.5 * Math.PI, (2 * percentage / 100 - 0.5) * Math.PI);
      ctx.strokeStyle = '#939393';
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    canvasRefs.current.forEach((ref, index) => {
      if (ref.current) {
        drawCircle(ref.current, progressData.circles[index].percent);
      }
    });

    return () => {
      elements.forEach((el, index) => observers[index].unobserve(el));
    };
  }, [counts]);


  return (
    <>
    

      {/* Progress circles section */}
      <section className="py-28 bg-[url('/assets/images/serviceIcon/bg-iconbox1-hover.jpg')] bg-center  ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {progressData.circles.map((circle, index) => (
              <div key={circle.id} className="text-center mb-8 xl:mb-0">
                <div className="circle-progress relative inline-block">
                  <canvas
                    ref={canvasRefs.current[index]}
                    width="165"
                    height="165"
                    className="transform -rotate-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl">
                      <span className="percent">{circle.percent}</span>%
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mt-6 mb-3 uppercase">{circle.title}</h4>
                <p className="text-[#939393]">{circle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Number;
