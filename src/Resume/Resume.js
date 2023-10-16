import React from 'react';
import './Resume.css';
import ToolTip from '../ToolTip/ToolTip';


function Resume() {
  return (
    <section className='resume' id="resume">
      {/* <h4>Resume</h4> */}
      <p> 
        {/* Download Resume */}
        <a href="/Izzuan.pdf" download>
        <i class="bi bi-download"></i>
        </a>
        <ToolTip text="test"/>
      </p>
    </section>
  );
}

export default Resume;
