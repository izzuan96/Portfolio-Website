import React from 'react';

import './PreviewProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import comingSoonImage from '../images/comingsoon.jpg'; // Ensure this path is correct

const PreviewProjectCard = ({ image, title, isLocked, projectLink }) => {
  return (
    <div className="preview-card-container">

      <div 
        className={`preview-card ${isLocked ? 'locked' : ''}`}
        style={{ cursor: isLocked ? 'not-allowed' : 'pointer' }} // Change cursor for locked items
      >
        <img src={image} alt={title} className={`project-image ${isLocked ? 'locked-image' : ''}`} />
        {isLocked && (
          <>
            <img src={comingSoonImage} alt="Coming Soon" className="coming-soon-image" />
            <FontAwesomeIcon icon={faLock} className="lock-icon" />
          </>
        )}
      </div>
      <a 
        href={!isLocked ? projectLink : "#"}
        className={`project-title ${isLocked ? 'locked-title' : ''}`}
        onClick={(e) => { if (isLocked) e.preventDefault(); }} // Prevent default behavior if locked
      >
        {title}
      </a>
    </div>
  );
};

export default PreviewProjectCard;
