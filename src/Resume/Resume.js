import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className='resume' id="resume">
      <h4>Resume</h4>
      <a href="your-resume.pdf" download>
        Download Resume
      </a>
      {/* Include your resume content here */}
    </section>
  );
}

export default Resume;
