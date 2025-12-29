import React from 'react';
import './LogoLoop.css';

// Using text logos for minimal agency feel, or could use SVG placeholders
const clients = [
    "TechGlobal", "InnovateX", "FutureFlow", "AlphaWave", "NeonSystems", "CyberEdge", "QuantumLeap", "StellarDynamics"
];

const LogoLoop = () => {
    return (
        <section className="logo-section">
            <h3 className="section-label">Trusted By</h3>
            <div className="logo-marquee">
                <div className="track">
                    {[...clients, ...clients].map((client, index) => (
                        <div className="client-logo" key={index}>
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoLoop;
