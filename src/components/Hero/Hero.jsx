
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../UI/MagneticButton';
import HeroImageTrail from './HeroImageTrail';
import './Hero.css';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="hero-section">
            <HeroImageTrail />
            <div className="hero-bg-accent" />

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="hero-text"
                >
                    <h1>
                        Build Your <br />
                        <span className="text-gradient">Genie.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Futuristic Freelancing Agency. <br />
                        We craft premium digital experiences.
                    </p>

                    <MagneticButton className="cta-button">
                        Start Project
                    </MagneticButton>
                </motion.div>

                <div className="hero-visuals">
                    {/* Floating Shapes */}
                    <motion.div style={{ y: y1 }} className="shape shape-cube" />
                    <motion.div style={{ y: y2 }} className="shape shape-sphere" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span>Scroll</span>
                <div className="line"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
