import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "MSquare Groups transformed our business. Their strategic insights were invaluable. The ROI we achieved exceeded all expectations.",
        author: "Madhan Kumar",
        role: "CEO",
        company: "TechVision Inc.",
        avatar: "https://picsum.photos/100/100?random=7",
        rating: 5
    },
    {
        quote: "Professional, innovative, and results-oriented. The team delivered beyond our requirements and on time.",
        author: "Prakhar Singh",
        role: "CTO",
        company: "Digital Solutions Ltd.",
        avatar: "https://picsum.photos/100/100?random=8",
        rating: 5
    },
    {
        quote: "The team went above and beyond to deliver a seamless digital experience. Our customer satisfaction increased by 40%.",
        author: "Priya Sharma",
        role: "Marketing Director",
        company: "Growth Dynamics",
        avatar: "https://picsum.photos/100/100?random=9",
        rating: 5
    },
    {
        quote: "Exceptional service and innovative solutions. They helped us scale our operations efficiently and effectively.",
        author: "Rajesh Patel",
        role: "Founder",
        company: "StartupHub",
        avatar: "https://picsum.photos/100/100?random=10",
        rating: 5
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
                            <div className="rating">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="testimonial-quote">"{item.quote}"</p>
                            <div className="testimonial-author">
                                <img 
                                    src={item.avatar} 
                                    alt={item.author} 
                                    className="author-avatar"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        const initials = item.author.split(' ').map(n => n[0]).join('');
                                        e.target.parentElement.innerHTML += `<div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #8b5cf6); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 1.2rem;">${initials}</div>`;
                                    }}
                                />
                                <div className="author-info">
                                    <h4>{item.author}</h4>
                                    <span>{item.role}</span>
                                    <span className="company">{item.company}</span>
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
