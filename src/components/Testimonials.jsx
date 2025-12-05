import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "MSquare Groups transformed our business. Their strategic insights were invaluable.",
        author: "Madhan",
        role: "CEO"
    },
    {
        quote: "Professional, innovative, and results-oriented. Highly recommended.",
        author: "Prakhar",
        role: "Director"
    },
    {
        quote: "The team went above and beyond to deliver a seamless digital experience.",
        author: "PK",
        role: "Marketing Head"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="testimonials-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title center"
                >
                    Client Testimonials
                </motion.h2>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="testimonial-card"
                        >
                            <Quote className="quote-icon" size={32} />
                            <p className="testimonial-quote">"{item.quote}"</p>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <h4>{item.author}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
