import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-background">
                <div className="aurora-1"></div>
                <div className="aurora-2"></div>
                <div className="aurora-3"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="badge-container"
                >
                    <span className="hero-badge">New Era of Innovation</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-title"
                >
                    Building the Future,<br />
                    <span className="text-gradient">One Strategy at a Time.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="hero-description"
                >
                    We provide cutting-edge solutions to elevate your business.
                    From strategic consulting to digital transformation, we are your partners in growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="hero-cta"
                >
                    <a href="#contact" className="btn btn-primary">
                        Get Started <ArrowRight size={20} />
                    </a>
                    <a href="#services" className="btn btn-outline">
                        Our Services
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
