import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="about-image"
                >
                    <div className="image-wrapper">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Team meeting" />
                        <div className="image-overlay"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="about-content"
                >
                    <h2 className="section-title">About Us</h2>
                    <h3 className="about-heading">We turn vision into reality.</h3>
                    <p className="about-text">
                        At MSquare Groups, we believe in the power of innovation and strategy.
                        Founded with a mission to empower businesses, we bring together a team of
                        experts dedicated to solving complex challenges.
                    </p>
                    <p className="about-text">
                        Our approach is holistic, combining data-driven insights with creative
                        problem-solving to deliver results that matter. Whether you're a startup
                        looking to scale or an enterprise seeking transformation, we are here to guide you.
                    </p>

                    <div className="stats">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">200+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Team Members</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
