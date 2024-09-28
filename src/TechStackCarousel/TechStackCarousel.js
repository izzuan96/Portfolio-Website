// TechStackCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Title from '../Title/Title';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import custom icons
// import ReactLogo from '../images/react-logo.png'; // Import your logos
import HtmlLogo from '../images/html.png';
import CssLogo from '../images/css.png';
import BootstrapLogo from '../images/bootstrap.png';
import Separator from '../Separator/Separator';
import './TechStackCarousel.css'; // Optional: Add custom styles

const TechStackCarousel = () => {
    return (
        <>
            <div className="tech-stack-carousel">
                <div className="tech-stack">
                    <Title text="My Tech Stack" />
                    <Carousel
                        interval={3000}
                        pause="hover"
                        nextIcon={<FaChevronRight className="carousel-icon next-icon" />}
                        prevIcon={<FaChevronLeft className="carousel-icon prev-icon" />}
                    >
                        <Carousel.Item>
                            <div className="carousel-item-content">
                                <img className="carousel-logo" src={HtmlLogo} alt="React Logo" />
                                <Carousel.Caption>
                                    <h3>React.js</h3>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-item-content">
                                <img className="carousel-logo" src={HtmlLogo} alt="HTML Logo" />
                                <Carousel.Caption>
                                    <h3>HTML</h3>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-item-content">
                                <img className="carousel-logo" src={CssLogo} alt="CSS Logo" />
                                <Carousel.Caption>
                                    <h3>CSS</h3>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-item-content">
                                <img className="carousel-logo" src={BootstrapLogo} alt="Bootstrap Logo" />
                                <Carousel.Caption>
                                    <h3>Bootstrap</h3>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Separator nextBgColor="#E1F3FB" height="auto" waveType="wave4" />
            </div>
        </>
    );
};

export default TechStackCarousel;