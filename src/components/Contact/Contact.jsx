import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "../UI/MagneticButton";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Ready to <span className="text-gradient">Upgrade?</span>
          </h2>
          <p className="contact-sub">
            Let's build something extraordinary together. Reach out for a quote
            or just to say hello.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <h4>Email</h4>
              <p>buildyourjenie@gmail.com</p>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <p>+91 88257 52798</p>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <p>+91 81899 69255</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <input type="text" placeholder="Your Name" />
            <span className="focus-border"></span>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" />
            <span className="focus-border"></span>
          </div>
          <div className="form-group">
            <textarea rows="5" placeholder="Project Details"></textarea>
            <span className="focus-border"></span>
          </div>

          <MagneticButton
            className="submit-btn"
            onClick={(e) => e.preventDefault()}
          >
            Send Message
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
