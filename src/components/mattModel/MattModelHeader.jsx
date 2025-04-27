import React from 'react';
import mattModelData from '../../dataJson/mattModel.json';
import HeaderText from '../ui/HeaderText';

const MattModelHeader = () => {
  return (
    <div name="about" className="min-h-screen flex items-center justify-center py-10 bg-gradient-to-b from-black/90 to-gray-900">
      <div className="w-72 md:w-96 h-72 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse absolute start-0"></div>
      <div className="w-72 md:w-96 h-72 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse absolute top-10 end-20"></div>
      <div className="p-4 size-full  mx-auto">
        <div className=" container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center gap-8  mx-auto">
          
          {/* Left text container */}
          <div className="w-full text-left mx-auto">
            <h1 className="text-xl md:text-2xl ">{mattModelData.header.subtitle}</h1>
            <HeaderText header={mattModelData.header.title} />
            <p className="text-gray-200 text-sm md:text-md mb-6 max-w-xl">
              {mattModelData.header.description}
            </p>

            {/* Checkpoints */}
            <div className="flex flex-col gap-6 md:gap-8 text-gray-200 ">
              <ul className=" ">
                <li className="pt-2">
                  <span className="text-gray-300 mt-2 pt-1 mr-2">*</span>
                  Quality and design checks deeply
                </li>
                <li className="pt-2">
                  <span className="text-gray-300 mt-2 pt-1 mr-2">*</span>
                  Periodic site review and timelines
                </li>
                <li className="pt-2">
                  <span className="text-gray-300 mt-2 pt-1 mr-2">*</span>
                  Design development and strategy
                </li>
              </ul>
            </div>
          </div>

          {/* Right Model Container */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto">
            <model-viewer
              src="/models/tower-darco-webp-128.glb"
              alt="3D House Model"
              auto-rotate
              camera-controls
              loading="lazy"
              shadow-intensity="1"
              shadow-softness="0.75"
              environment-image="neutral"
              exposure="1"
              min-camera-orbit="auto 0deg 0m"
              style={{ width: "100%", height: "100%" }}
            ></model-viewer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MattModelHeader;