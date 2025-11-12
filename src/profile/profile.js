import React from 'react';
import './profile.css';
import myPicture from '../images/izzuan.jpg'; // Your profile picture path

function Profile() {
  return (
    <>
      <section className="profile-container">
        <div className="profile-text">
          <h1>Hello, I'm</h1>
          <h2> Izzuan Zawawi</h2>
          <h2>Front-End React Developer</h2>
          <p>Showcasing modern, interactive web applications</p>
        </div>
        <div className="profile-image">
          <img src={myPicture} alt="Izzuan Zawawi" />
        </div>
      </section>
      <div className='profile-description'>
        <h3>
         "Building scalable, component‑driven interfaces with clean, maintainable code"
        </h3>
      </div>
    </>
  );
}

export default Profile;
