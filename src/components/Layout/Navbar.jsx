import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
            <div className="container nav-container">
                <div className="logo">
                    B.U.G <span className="logo-accent">//</span>
                </div>

                <ul className="nav-links">
                    {links.map((link) => (
                        <motion.li key={link.name} whileHover={{ scale: 1.1 }}>
                            <a href={link.href} className="nav-link">{link.name}</a>
                        </motion.li>
                    ))}
                </ul>

                <div className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`hamburger ${isOpen ? 'open' : ''}`} />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
