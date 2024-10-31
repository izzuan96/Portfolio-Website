// TechStackCarousel.js
import React from 'react';
import Title from '../Title/Title';
import HtmlLogo from '../images/html.png'; // Importing images
import CssLogo from '../images/css.png';
import JavaScript from '../images/js.png';
import Github from '../images/github.png';
import Fontawesome from '../images/fontawesome.svg';
import BootstrapLogo from '../images/bootstrap.png';
import ReactLogo from '../images/react_logo.png';
import './TechStackCards.css';

// Define your tech stack data with imported logos
const techStack = [
    { name: 'Javascript', logo: JavaScript},
    { name: 'HTML', logo: HtmlLogo },
    { name: 'CSS', logo: CssLogo },
    { name: 'Bootstrap', logo: BootstrapLogo },
    { name: 'React.js', logo: ReactLogo }, 
    { name: 'Github', logo: Github }, 
    { name: 'FontAwesome', logo: Fontawesome },
    // Add more technologies here as needed
];

const TechStackCards = ({ darkMode }) => {
    return (
        <>
        <Title text="Tech Stack" className="tech-stack-title" color="black" /> 
        <div className={`tech-stack-cards ${darkMode ? 'dark-mode' : ''}`}>
            {techStack.map((tech, index) => (
                <div className="tech-card" key={index}>
                    <img src={tech.logo} alt={`${tech.name} Logo`} className="tech-logo" />
                    <h4 className="tech-name">{tech.name}</h4>
                </div>
            ))}
        </div>
        </>
    );
};


export default TechStackCards;
