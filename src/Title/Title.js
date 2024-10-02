import React from 'react';
import './Title.css'; // Import the CSS file for styling

const Title = ({ text, className, color }) => {
  return (
    <h1 className={`title ${className}`} style={{ color: color }}>
      {text}
    </h1>
  );
};

export default Title;
