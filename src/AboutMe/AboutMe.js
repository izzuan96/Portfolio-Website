import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/aboutme.jpeg';
import AboutMePage from '../pages/AboutMePage';
import './AboutMe.css';


function AboutMe() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className="aboutMe" id='aboutMe'>
      <div className='wrap'>
        <img src={image} alt='About me'>
        </img>
      </div>
      <div className='hideButton'>
      <h4>About Me</h4>
      <p>Passionate about crafting exepctional user experiences through design and code fusion. Proficient in HTML, CSS, javascript, and React for dynamnic Interfaces. Commited to resposive design and optimizing performance. Ready to contribute creatively to innovative projects.</p>
        {/* {!showModal &&(
          <button className="learn-more-button" onClick={openModal}>
            Learn More
          </button>)}
          {showModal &&(
          <button className="close-button" onClick={closeModal}>
            Close
          </button>)} */}
      </div>
      {showModal && <AboutMePage />}
      
    </div>
  );
}

export default AboutMe;
