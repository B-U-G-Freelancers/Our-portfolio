import React from 'react';
import { motion } from 'framer-motion';
import { Video, PenTool, Linkedin, MessageCircle, Gift, Code, Megaphone, Palette } from 'lucide-react';
import './Services.css';

const servicesList = [
    { title: 'Video Editing', icon: <Video />, desc: 'Cinematic cuts, color grading, and motion graphics.' },
    { title: 'Content Script Writing', icon: <PenTool />, desc: 'Engaging scripts that hook audiences instantly.' },
    { title: 'LinkedIn Automation', icon: <Linkedin />, desc: 'Profile management & automated lead generation.' },
    { title: 'WhatsApp Chatbots', icon: <MessageCircle />, desc: 'Automated business support agents.' },
    { title: 'Gift & Invite Design', icon: <Gift />, desc: 'Custom digital cards and creative gift concepts.' },
    { title: 'Web Development', icon: <Code />, desc: 'Modern, high-performance websites.' },
    { title: 'Advertisements', icon: <Megaphone />, desc: 'High-conversion ad creates.' },
    { title: 'Art & Creative', icon: <Palette />, desc: 'Home décor concepts and artistic designs.' },
];

const Services = () => {
    return (
        <section className="services-section section-padding">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our <span className="text-gradient">Services</span>
                </motion.h2>

                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <div className="hover-glow" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
