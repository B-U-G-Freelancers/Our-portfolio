import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Slight delay before unmounting
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // 2 seconds total roughly

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -500, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="preloader-content">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="logo-wrapper"
                >
                    <span className="logo-text">B.U.G</span>
                    <span className="logo-sub">// Build Your Genie</span>
                </motion.div>

                <div className="progress-container">
                    <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>

                <div className="percentage">{progress}%</div>
            </div>
        </motion.div>
    );
};

export default Preloader;
