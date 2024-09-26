import React from 'react';
import './profile.css';
import myPicture from '../images/izzuan.jpeg'; // Your profile picture path
import Separator from '../Separator/Separator';

function Profile() {
  return (
    <>
    <section className="profile-container">
      <div className="profile-text">
        <h1>Hi, I'm Izzuan Zawawi</h1>
        <h2>Front-End React Developer</h2>
        <p>I do web design for a piece of bread!</p>
      </div>
      <div className="profile-image">
        <img src={myPicture} alt="Izzuan Zawawi" />
      </div>
    </section>
    </>
  );
}

export default Profile;
