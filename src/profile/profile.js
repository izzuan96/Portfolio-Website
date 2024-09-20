import React from 'react';
import './profile.css';
import myPicture from '../images/izzuan.jpeg';

function Profile() {
    return (
        <div className='profileContainer'>
            <div className='profileText'>
                <h1>Hi, I'm Izzuan Zawawi</h1>
                <p>I do web design for a piece of bread!</p>
                <p>Front-End React Developer</p>
            </div>
            <div className='profilePicture'>
                <img src={myPicture} alt='my picture' />
            </div>
        </div>
    );
}

export default Profile;
