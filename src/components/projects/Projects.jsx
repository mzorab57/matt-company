import React, { useState } from 'react';
import portfolioData from '../../dataJson/portfolio.json';
import HeaderText from '../ui/HeaderText';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('exterior');
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 py-20">
                {/* Category Tabs */}
                <div className="flex justify-center gap-8 mb-16">
                    {portfolioData.categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`md:text-lg text-sm font-semibold px-6 py-3 rounded transition-all duration-300 
                            ${activeCategory === category.id
                                ? 'bg-primary/5 border-2 text-white  transform scale-105'
                                : 'text-gray-400 border border-gray-100/30 hover:text-white hover:bg-primary/10 hover:shadow-md hover:scale-102'
                            }
                            backdrop-blur-sm border border-transparent hover:border-primary/30
                            relative overflow-hidden group`}
                        >
                             <div className="absolute -top-10 -right-10 w-16 sm:w-20 h-16 sm:h-20 bg-primary/100 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-300"></div>
                            <span className="relative z-10">{category.title}</span>
                            <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 
                                transition-opacity duration-300 opacity-0 group-hover:opacity-100
                                ${activeCategory === category.id ? 'opacity-100' : ''}`}
                            />
                        </button>
                    ))}
                </div>

                {/* Active Category Content */}
                {portfolioData.categories.map((category) => (
                    <div key={category.id} className={`transition-all duration-500 ${
                        activeCategory === category.id ? 'block' : 'hidden'
                    }`}>
                        <div className="text-center mb-12">
                            <HeaderText header={category.title} />
                            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                                {category.description}
                            </p>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: category.id === 'interior' ? 165 : 30 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden border border-gray-800 rounded cursor-zoom-in"
                                    onClick={() => setSelectedProject({
                                        id: index + 1,
                                        title: `${category.title} ${index + 1}`,
                                        image: `/assets/images/portfolio/${category.id}/${category.id} (${index + 1}).jpg`
                                    })}
                                >
                                    <img
                                        src={`/assets/images/portfolio/${category.id}/${category.id} (${index + 1}).jpg`}
                                        alt={`${category.title} ${index + 1}`}
                                        loading="lazy"
                                        className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.parentElement.style.display = 'none';
                                        }}
                                    />
                                    {/* Zoom Icon */}
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <svg 
                                            className="w-12 h-12  text-white/80" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" 
                                            />
                                        </svg>
                                    </div>
                                   
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Modal */}
                {selectedProject && (
                    <div 
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
                            <button
                                className="absolute -top-10 right-0 text-white text-xl hover:text-primary transition-colors"
                                onClick={() => setSelectedProject(null)}
                            >
                                Close ×
                            </button>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-auto rounded-lg"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-white text-2xl font-semibold mb-2">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-primary">
                                    {selectedProject.category}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
