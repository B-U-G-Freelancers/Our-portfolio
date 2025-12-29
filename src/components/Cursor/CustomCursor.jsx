import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Cursor.css';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16); // Center the 32px cursor
            cursorY.set(e.clientY - 16);
        };

        const handleHoverStart = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
                setIsHovered(true);
            }
        }
        const handleHoverEnd = () => {
            setIsHovered(false);
        }

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHoverStart); // Delegated listener for simplicity
        window.addEventListener('mouseout', handleHoverEnd);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHoverStart);
            window.removeEventListener('mouseout', handleHoverEnd);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className={`cursor-dot ${isHovered ? 'hover' : ''}`}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            />
            <motion.div
                className="cursor-trail"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    transition: 'transform 0.15s ease-out'
                }}
            />
        </>
    );
};

export default CustomCursor;
