import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';
import './Process.css';

const processSteps = [
    {
        id: 1,
        icon: <Search size={32} />,
        title: 'Discovery & Research',
        description: 'We dive deep into understanding your business, goals, and challenges through comprehensive research and stakeholder interviews.',
        duration: '1-2 weeks',
        deliverables: ['Market Analysis', 'User Research', 'Technical Audit', 'Project Roadmap']
    },
    {
        id: 2,
        icon: <Lightbulb size={32} />,
        title: 'Strategy & Planning',
        description: 'Based on our findings, we develop a tailored strategy and detailed project plan with clear milestones and timelines.',
        duration: '1 week',
        deliverables: ['Strategic Plan', 'Technical Architecture', 'Design System', 'Timeline & Budget']
    },
    {
        id: 3,
        icon: <Code size={32} />,
        title: 'Development & Design',
        description: 'Our expert team brings your vision to life with cutting-edge technology and user-centered design principles.',
        duration: '4-12 weeks',
        deliverables: ['MVP Development', 'UI/UX Design', 'Quality Assurance', 'Performance Optimization']
    },
    {
        id: 4,
        icon: <Rocket size={32} />,
        title: 'Launch & Deployment',
        description: 'We ensure a smooth launch with comprehensive testing, deployment, and go-live support.',
        duration: '1-2 weeks',
        deliverables: ['Production Deployment', 'Launch Support', 'Performance Monitoring', 'User Training']
    },
    {
        id: 5,
        icon: <CheckCircle size={32} />,
        title: 'Support & Growth',
        description: 'Post-launch, we provide ongoing support, maintenance, and optimization to ensure continued success.',
        duration: 'Ongoing',
        deliverables: ['24/7 Support', 'Regular Updates', 'Performance Reports', 'Growth Strategies']
    }
];

const Process = () => {
    console.log('Process component loaded');
    return (
        <section id="process" className="process">
            <div className="process-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="process-header"
                >
                    <h2 className="section-title center">Our Process</h2>
                    <p className="section-subtitle">
                        A proven methodology that ensures successful project delivery and exceptional results.
                    </p>
                </motion.div>

                <div className="process-timeline">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`process-step ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="step-number">{step.id}</div>
                            <div className="step-content">
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                                <div className="step-meta">
                                    <span className="step-duration">Duration: {step.duration}</span>
                                </div>
                                <div className="step-deliverables">
                                    <h4>Key Deliverables:</h4>
                                    <ul>
                                        {step.deliverables.map((deliverable, deliverableIndex) => (
                                            <li key={deliverableIndex}>{deliverable}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;