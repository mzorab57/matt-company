import React from "react";
import whyChooseUsData from "../../dataJson/whyChooseUs.json";
import HeaderText from "../ui/HeaderText";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/90 to-gray-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>
      <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse absolute" ></div>
     
      <div className="container mx-auto px-4 relative text-start z-10">
        <div className="flex flex-col">
          {/* Who We Are Section */}
          <div className="mb-32">
            <HeaderText header={whyChooseUsData.whoWeAre.title} />
            <p className="text-gray-300 max-w-4xl  leading-relaxed text-lg">
              {whyChooseUsData.whoWeAre.description}
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="absolute inset-0 flex flex-col xl:flex-row items-center justify-center gap-x-20 translate-y-32">
            <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="w-96 h-96 bg-primary/20  rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="">
            <HeaderText header={whyChooseUsData.whyChooseUs.title} />
            <p className="text-gray-300 max-w-4xl  leading-relaxed text-lg">
              {whyChooseUsData.whyChooseUs.description}
            </p>
          </div>
        </div>

        {/* Goals Section */}
        <div className="my-32">
          <HeaderText header={whyChooseUsData.goals.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {whyChooseUsData.goals.items.map((goal) => (
              <div
                key={goal.id}
                className="group border bg-white/5 border-gray-500 backdrop-blur-lg p-8  hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6 relative w-20 h-20  bg-transparent border border-gray-500 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                  <img src={goal.icon} alt={goal.title} className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {goal.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divisions Section */}
        <div>
        
          <HeaderText header={whyChooseUsData.divisions.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
            {whyChooseUsData.divisions.items.map((division) => (
              <div
                key={division.id}
                className="group  backdrop-blur-lg py-4 px-2  hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start  ">
                  <div>
                    <h3 className="text-2xl font-semibold text-white my-4 group-hover:text-primary transition-colors duration-300">
                      {division.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed ">
                      {division.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
