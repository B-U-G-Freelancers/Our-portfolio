import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import MagneticButton from '../UI/MagneticButton';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-top">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="footer-cta-text"
                        >
                            Have an idea? <br />
                            <span className="text-gray">Let's build it.</span>
                        </motion.h2>
                        <MagneticButton className="footer-btn">
                            Get in Touch
                        </MagneticButton>
                    </div>

                    <div className="footer-divider" />

                    <div className="footer-bottom">
                        <div className="footer-logo">
                            B.U.G <span className="accent">//</span>
                        </div>

                        <div className="footer-links">
                            <div className="link-column">
                                <h4>Sitemap</h4>
                                <a href="#services">Services</a>
                                <a href="#about">About</a>
                                <a href="#team">Team</a>
                            </div>
                            <div className="link-column">
                                <h4>Socials</h4>
                                <a href="#">LinkedIn</a>
                                <a href="#">Instagram</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>

                        <div className="copyright">
                            &copy; {new Date().getFullYear()} B.U.G - Build Your Genie. <br />
                            All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
