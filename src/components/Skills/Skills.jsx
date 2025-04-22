import React from 'react';
import skillsData from '../../dataJson/ourSkills.json';

const Skills = () => {
  const { sectionTitle, description, skills, image } = skillsData;

  return (
    <section 
      className="w-full py-16 md:py-24  font-raleway text-[16px] leading-[1.875] text-white relative"
      style={{
        backgroundImage: 'url(/assets/images/ourSkills/bgSkills.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/9"></div> */}
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row">
          {/* Content Section */}
          <div className="xl:w-1/2 xl:flex-[0_0_50%] self-center px-0">
            <div className="p-8 xl:p-16">
              {/* Section Header */}
              <div className="mb-8">
                <span className="text-[#A3A3A3] uppercase tracking-wider text-sm mb-3 block">
                  [ {sectionTitle.label} ]
                </span>
                
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
              {sectionTitle.heading}
            </h1>
            ...................................
                
              </div>

              <div className="mb-10">
                
                <p className="text-light break-words">{description}</p>
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.id} className="pb-3 font-raleway font-semibold ">
                    <div className="overflow-hidden mb-2">
                      <span className="float-left font-sans capitalize">{skill.name}</span>
                    </div>
                    <div className="relative h-1 bg-white/15 rounded-sm">
                      <div
                        className="h-full bg-gray-500 font-normal  transition-all duration-500 relative"
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <span className="absolute font-sans -right-4 -top-6 text-sm">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="xl:w-1/2">
            <div className="h-full">
              <img
                src={image}
                alt="Skills"
                className="w-full h-full object-cover brightness-75 border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
