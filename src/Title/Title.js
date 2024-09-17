import React from 'react';
import './Title.css'; // Import the CSS file for styling

const Title = ({ text, className }) => {
  return (
    <h1 className={`title ${className}`}>
      {text}
    </h1>
  );
};

export default Title;