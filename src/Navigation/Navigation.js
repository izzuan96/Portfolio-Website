import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <div className='container'>
        <nav>
        <ul>
            <li>
            <a href='#aboutMe' >About Me </a>
            </li>
            <li>
            <a href="#gallery">Work</a>
            </li>
            <li>
            <a href="#gallery">Gallery</a>
            </li>
            <li>
            <a href="#resume">Resume</a>
            </li>
            <li>
            <a href="#contact">Contact</a>
            </li>
        </ul>
        </nav>
    </div>
  );
}

export default Navigation;
