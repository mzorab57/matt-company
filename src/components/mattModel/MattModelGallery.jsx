import React, { useState } from 'react';
import mattModelData from '../../dataJson/mattModel.json';
import HeaderText from '../ui/HeaderText';

const MattModelGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="py-10 md:py-20 bg-gradient-to-b from-black to-gray-900">
      {/* Background Effects */}
      <div className="w-48 h-48 md:w-72 md:h-72 bg-primary/15 rounded-full blur-3xl animate-pulse absolute end-0"></div>
      <div className="w-64 h-64 md:w-96 md:h-96 bg-primary/15 rounded-full blur-3xl animate-pulse absolute start-20"></div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Gallery Header */}
        <div className="mb-8 md:mb-16">
          <HeaderText header={mattModelData.gallery.title} />
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 md:mt-6 max-w-2xl">
            {mattModelData.gallery.description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 relative w-full">
          {mattModelData.gallery.images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden cursor-pointer border border-gray-500 m-4"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 sm:p-6">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/80"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/80"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/80"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/80"></div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl sm:max-w-4xl md:max-w-5xl w-full">
              <button
                className="absolute -top-8 sm:-top-10 right-0 text-white text-lg sm:text-xl"
                onClick={() => setSelectedImage(null)}
              >
                Close ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <p className="text-white text-center mt-2 sm:mt-4 text-base sm:text-lg md:text-xl">
                {selectedImage.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MattModelGallery;
