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
      
      {!isLocked ? (
        <a
          href={projectLink}
          className="project-title"
        >
          {title}
        </a>
      ) : (
        <button
          className="project-title locked-title"
          disabled
          aria-disabled="true"
        >
          {title}
        </button>
      )}
    </div>
  );
};

export default PreviewProjectCard;
