import React from 'react';
import { Link } from 'react-router-dom';
import collectionData from '../../dataJson/collection.json';

const Collection = () => {
  return (
    <section className="p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
        {collectionData.projects.map((project) => (
          <div 
            key={project.id} 
            className={`relative group overflow-hidden ${project.size === '2x' ? 'sm:col-span-2 sm:row-span-2' : ''}`}
          >
            <div className="relative">
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <Link to={project.link}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h5 className="text-white text-xl font-semibold">{project.title}</h5>
                  <i className="text-white text-2xl ml-2">+</i>
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div>
                  <h5>
                    <Link to={project.link} className="text-xl font-semibold hover:text-primary">
                      {project.title}
                    </Link>
                  </h5>
                  <p className="mt-2">
                    {Array.isArray(project.category) ? (
                      project.category.map((cat, index) => (
                        <span key={index}>
                          <Link to={`/category/${cat.toLowerCase()}`} className="text-gray-600 hover:text-primary">
                            {cat}
                          </Link>
                          {index < project.category.length - 1 ? ', ' : ''}
                        </span>
                      ))
                    ) : (
                      <Link to={`/category/${project.category.toLowerCase()}`} className="text-gray-600 hover:text-primary">
                        {project.category}
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
