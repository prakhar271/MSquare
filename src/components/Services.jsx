import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Code, Users, Globe, Shield, Lightbulb } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <TrendingUp size={40} />,
        title: 'Strategic Consulting',
        description: 'Data-driven strategies to optimize your business operations and drive sustainable growth.'
    },
    {
        icon: <Code size={40} />,
        title: 'Digital Transformation',
        description: 'Modernizing your technology stack to stay ahead in the digital age.'
    },
    {
        icon: <Users size={40} />,
        title: 'Talent Acquisition',
        description: 'Connecting you with the best talent to build high-performing teams.'
    },
    {
        icon: <Globe size={40} />,
        title: 'Global Expansion',
        description: 'Navigating international markets with our expert guidance and network.'
    },
    {
        icon: <Shield size={40} />,
        title: 'Risk Management',
        description: 'Identifying and mitigating risks to protect your assets and reputation.'
    },
    {
        icon: <Lightbulb size={40} />,
        title: 'Innovation Labs',
        description: 'Fostering a culture of innovation to develop breakthrough products and services.'
    }
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="services-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title center"
                >
                    Our Services
                </motion.h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="service-card"
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
