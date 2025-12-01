import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="contact-header"
                >
                    <h2 className="section-title center">Get In Touch</h2>
                    <p className="contact-subtitle">Have a project in mind? Let's talk.</p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="contact-info"
                    >
                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h3>Email Us</h3>
                                <p>hello@msquaregroups.in</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h3>Call Us</h3>
                                <p>+91 9972751690</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h3>Visit Us</h3>
                                <p>Bangalore, Karnataka</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="contact-form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>

                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} MSquare Groups. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
