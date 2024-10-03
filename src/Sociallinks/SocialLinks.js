// SocialLinks.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SocialLinks.css';


const SocialLinks = () => {
    return (
        <div className="social-links-sidebar">
            <a href="https://github.com/izzuan96/Portfolio-Website.git" className="social-link-item" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} className="social-icon github-icon social-link-icon" />
            </a>
            <a href="https://www.linkedin.com/in/izzuan-zawawi-profile" className="social-link-item" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin-icon social-link-icon" />
            </a>
            <a href="mailto:izzuanzawawi@gmail.com" className="social-link-item" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} className="social-icon email-icon social-link-icon" />
            </a>
        </div>
    );
};

export default SocialLinks;