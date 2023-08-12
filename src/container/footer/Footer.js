import React from 'react'

import logo from '../../assets/logo-white.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className='ft-container'>
        <img src={logo} alt='logo'/>
        <div className='site-map'>
        <h3>sitemap</h3>
        <p><a href='#home'>Home</a></p>
        <p><a href='#home'>About</a></p>
        <p><a href='#home'>Menu</a></p>
        <p><a href='#home'>Reservations</a></p>
        <p><a href='#home'>Order Online</a></p>
        <p><a href='#home'>Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer