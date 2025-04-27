import React, { useState } from 'react'; // Fix import
import portfolioData from '../../dataJson/portfolio.json'; // Add missing import
import HeaderText from '../ui/HeaderText'; // Add missing import

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('exterior');
    
    return (
        <div className="bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 py-20">
                {/* Category Tabs */}
                <div className="flex justify-center gap-8 mb-16">
                    {portfolioData.categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`text-lg font-semibold px-6 py-3 rounded-lg transition-all duration-300 ${
                                activeCategory === category.id
                                ? 'bg-primary text-white'
                                : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* Active Category Content */}
                {portfolioData.categories.map((category) => (
                    <div
                        key={category.id}
                        className={`transition-all duration-500 ${
                            activeCategory === category.id ? 'block' : 'hidden'
                        }`}
                    >
                        <div className="text-center mb-12">
                            <HeaderText header={category.title} />
                            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                                {category.description}
                            </p>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group relative overflow-hidden border border-gray-800 rounded-lg"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                        <span className="text-primary text-sm mb-2">
                                            {project.category}
                                        </span>
                                        <h3 className="text-white text-xl font-semibold">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )
    }

    export default Projects
