import React from 'react';
import './profile.css';
import myPicture from '../images/izzuan.jpeg'; // Your profile picture path

function Profile() {
  return (
    <>
      <section className="profile-container">
        <div className="profile-text">
          <h1>Hello, I'm</h1>
          <h2> Izzuan Zawawi</h2>
          <h2>Front-End React Developer</h2>
          <p>I do web design for a piece of bread!</p>
        </div>
        <div className="profile-image">
          <img src={myPicture} alt="Izzuan Zawawi" />
        </div>
      </section>
      <div className='profile-description'>
        <p>
          I am a visionary web developer who leverages AI to streamline my workflow.<br /> Unlike traditional methods, I generate code efficiently and accurately.<br /> With a deep understanding of AI, I can create complex web applications with minimal manual effort,<br /> ensuring faster development cycles and higher-quality results.
        </p>
      </div>
    </>
  );
}

export default Profile;
