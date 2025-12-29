import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Team.css';

const teamMembers = [
    { name: 'Bhuvanesh', role: 'Tech Lead' },
    { name: 'Jothishwaran', role: 'Creative Director' },
    { name: 'Naren', role: 'Automation Specialist' },
    { name: 'Sanjeev', role: 'Full Stack Developer' },
    { name: 'Shajin', role: 'UI/UX Designer' },
    { name: 'Vaman', role: 'Strategy Head' },
    { name: 'Vimalesh', role: 'Marketing Lead' },
];

const TeamCard = ({ member }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 30 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;

        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="team-card-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000
            }}
        >
            <motion.div
                className="team-card"
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: "preserve-3d"
                }}
            >
                <div className="card-content" style={{ transform: "translateZ(50px)" }}>
                    <div className="avatar-placeholder">
                        {member.name.charAt(0)}
                    </div>
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                </div>
                <div className="card-glow" />
            </motion.div>
        </motion.div>
    );
};

const Team = () => {
    return (
        <section className="team-section section-padding">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Meet The <span className="text-gradient">Team</span>
                </motion.h2>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
