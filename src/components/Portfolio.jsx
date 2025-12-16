import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
        image: 'https://picsum.photos/600/400?random=1',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true
    },
    {
        id: 2,
        title: 'Mobile Banking App',
        category: 'Mobile Development',
        description: 'Secure mobile banking application with biometric authentication.',
        image: 'https://picsum.photos/600/400?random=2',
        technologies: ['React Native', 'Firebase', 'Biometrics'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true
    },
    {
        id: 3,
        title: 'Digital Marketing Campaign',
        category: 'Digital Marketing',
        description: 'Comprehensive digital marketing strategy that increased ROI by 300%.',
        image: 'https://picsum.photos/600/400?random=3',
        technologies: ['Google Ads', 'SEO', 'Analytics', 'Social Media'],
        liveUrl: '#',
        featured: false
    },
    {
        id: 4,
        title: 'SaaS Dashboard',
        category: 'Web Development',
        description: 'Analytics dashboard for SaaS companies with real-time data visualization.',
        image: 'https://picsum.photos/600/400?random=4',
        technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false
    }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Digital Marketing'];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === category));
        }
    };

    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="portfolio-header"
                >
                    <h2 className="section-title center">Our Work</h2>
                    <p className="section-subtitle">
                        Explore our portfolio of successful projects and see how we've helped businesses grow.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="portfolio-filters"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`portfolio-card ${project.featured ? 'featured' : ''}`}
                        >
                            <div className="portfolio-image">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)';
                                        e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-weight: 600; font-size: 1.2rem;">${project.title}</div>`;
                                    }}
                                />
                                <div className="portfolio-overlay">
                                    <div className="portfolio-actions">
                                        <a href={project.liveUrl} className="action-btn" title="View Live">
                                            <Eye size={20} />
                                        </a>
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} className="action-btn" title="View Code">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        <a href={project.liveUrl} className="action-btn" title="External Link">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-content">
                                <span className="portfolio-category">{project.category}</span>
                                <h3 className="portfolio-title">{project.title}</h3>
                                <p className="portfolio-description">{project.description}</p>
                                <div className="portfolio-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;