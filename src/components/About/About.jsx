import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const stats = [
    { label: 'Projects Done', value: '150+' },
    { label: 'Happy Clients', value: '98%' },
    { label: 'Years Active', value: '3+' },
    { label: 'Team Members', value: '7' },
];

const About = () => {
    return (
        <section className="about-section section-padding" id="about">
            <div className="container about-container">
                <div className="about-text-content">
                    <motion.h2
                        className="section-title"
                        style={{ textAlign: 'left' }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        We Are <span className="text-gradient">B.U.G</span>
                    </motion.h2>
                    <motion.p
                        className="about-desc"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Simply put, we Build Your Genie. A collective of 7 tech-driven creatives passionate about automation,
                        design, and futuristic interfaces. We don't just deliver projects; we engineer digital experiences that captivate.
                    </motion.p>

                    <div className="about-stats">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                className="stat-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="about-visual">
                    {/* Abstract Grid Visual */}
                    <div className="grid-decoration">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="grid-cell" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
