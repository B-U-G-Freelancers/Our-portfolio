import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroImageTrail.css';

// Using gradient blocks as futuristic "images"
const images = [
    'linear-gradient(45deg, #ff00cc, #333399)',
    'linear-gradient(45deg, #00ffcc, #333399)',
    'linear-gradient(45deg, #ccff00, #333399)',
    'linear-gradient(45deg, #ff9900, #333399)',
    'linear-gradient(45deg, #00ccff, #333399)',
];

const HeroImageTrail = () => {
    const [trail, setTrail] = useState([]);
    const lastPos = useRef({ x: 0, y: 0 });
    const frameRef = useRef(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;

        // Calculate distance
        const dist = Math.hypot(clientX - lastPos.current.x, clientY - lastPos.current.y);

        if (dist > 50) { // Only add image every 50px
            lastPos.current = { x: clientX, y: clientY };

            const newItem = {
                id: Date.now(),
                x: clientX,
                y: clientY,
                bg: images[Math.floor(Math.random() * images.length)],
                rotation: Math.random() * 20 - 10
            };

            setTrail((prev) => [...prev.slice(-5), newItem]); // Keep last 5
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="hero-trail-container">
            <AnimatePresence>
                {trail.map((item) => (
                    <motion.div
                        key={item.id}
                        className="trail-image-block"
                        style={{
                            left: item.x,
                            top: item.y,
                            background: item.bg,
                            rotate: item.rotation
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.5, scale: 1 }}
                        exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default HeroImageTrail;
