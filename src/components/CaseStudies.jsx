import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import './CaseStudies.css';

const caseStudies = [
    {
        id: 1,
        title: 'E-Commerce Growth Strategy',
        client: 'ABC Inc.',
        challenge: 'Struggling with low conversion rates and high cart abandonment',
        solution: 'Implemented AI-powered recommendations and streamlined checkout process',
        results: [
            { icon: <TrendingUp size={24} />, metric: '300%', label: 'Conversion Rate Increase' },
            { icon: <DollarSign size={24} />, metric: '$2.5M', label: 'Additional Revenue' },
            { icon: <Users size={24} />, metric: '150%', label: 'Customer Retention' },
            { icon: <Clock size={24} />, metric: '60%', label: 'Faster Checkout' }
        ],
        image: 'https://picsum.photos/800/400?random=5',
        testimonial: 'MSquare transformed our entire digital strategy. The results exceeded our expectations.',
        clientRole: 'CEO, ABC Inc.'
    },
    {
        id: 2,
        title: 'Digital Transformation for Healthcare',
        client: 'MediCare Solutions',
        challenge: 'Outdated systems causing inefficiencies in patient management',
        solution: 'Custom healthcare management system with telemedicine integration',
        results: [
            { icon: <Clock size={24} />, metric: '75%', label: 'Reduced Wait Times' },
            { icon: <Users size={24} />, metric: '500+', label: 'Patients Served Daily' },
            { icon: <TrendingUp size={24} />, metric: '90%', label: 'Staff Efficiency' },
            { icon: <DollarSign size={24} />, metric: '40%', label: 'Cost Reduction' }
        ],
        image: 'https://picsum.photos/800/400?random=6',
        testimonial: 'The system revolutionized how we serve our patients. Incredible impact on our operations.',
        clientRole: 'Director, ABC Solutions'
    }
];

const CaseStudies = () => {
    console.log('CaseStudies component loaded');
    return (
        <section id="case-studies" className="case-studies">
            <div className="case-studies-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="case-studies-header"
                >
                    <h2 className="section-title center">Success Stories</h2>
                    <p className="section-subtitle">
                        Real results from real clients. See how we've helped businesses achieve their goals.
                    </p>
                </motion.div>

                <div className="case-studies-list">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="case-study-card"
                        >
                            <div className="case-study-image">
                                <img 
                                    src={study.image} 
                                    alt={study.title}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.style.background = 'linear-gradient(135deg, #10b981, #3b82f6)';
                                        e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-weight: 600; font-size: 1.5rem; text-align: center; padding: 20px;">${study.title}</div>`;
                                    }}
                                />
                                <div className="case-study-overlay">
                                    <span className="client-name">{study.client}</span>
                                </div>
                            </div>

                            <div className="case-study-content">
                                <h3 className="case-study-title">{study.title}</h3>
                                
                                <div className="case-study-details">
                                    <div className="detail-section">
                                        <h4>Challenge</h4>
                                        <p>{study.challenge}</p>
                                    </div>
                                    
                                    <div className="detail-section">
                                        <h4>Solution</h4>
                                        <p>{study.solution}</p>
                                    </div>
                                </div>

                                <div className="case-study-results">
                                    <h4>Results</h4>
                                    <div className="results-grid">
                                        {study.results.map((result, resultIndex) => (
                                            <div key={resultIndex} className="result-item">
                                                <div className="result-icon">{result.icon}</div>
                                                <div className="result-content">
                                                    <span className="result-metric">{result.metric}</span>
                                                    <span className="result-label">{result.label}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="case-study-testimonial">
                                    <blockquote>"{study.testimonial}"</blockquote>
                                    <cite>— {study.clientRole}</cite>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;