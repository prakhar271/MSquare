import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo">
                    <a href="#">MSquare Groups</a>
                </div>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#case-studies" onClick={() => setIsOpen(false)}>Case Studies</a>
                    </li>
                    <li className="nav-item">
                        <a href="#process" onClick={() => setIsOpen(false)}>Process</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
