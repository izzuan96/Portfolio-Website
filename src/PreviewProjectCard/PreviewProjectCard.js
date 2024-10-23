import React from 'react';
import './PreviewProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import comingSoonImage from '../images/comingsoon.jpg'; // Ensure this path is correct

const PreviewProjectCard = ({ image, title, isLocked, projectLink }) => {
  return (
    <div className="preview-card-container">
      {!isLocked ? (
        <a
          href={projectLink}
          className="preview-card"
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: 'pointer' }} // Make sure the card is clickable
        >
          <img src={image} alt={title} className="project-image" />
        </a>
      ) : (
        <div className="preview-card locked" style={{ cursor: 'not-allowed' }}>
          <img src={image} alt={title} className="project-image locked-image" />
          <img src={comingSoonImage} alt="Coming Soon" className="coming-soon-image" />
          <FontAwesomeIcon icon={faLock} className="lock-icon" />
        </div>
      )}
      
      {!isLocked ? (
        <a
          href={projectLink}
          className="project-title"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      ) : (
        <h1
          className="project-title locked-title"
          disabled
          aria-disabled="true"
        >
          {title}
        </h1>
      )}
    </div>
  );
};

export default PreviewProjectCard;
