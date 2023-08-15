import React from 'react'

import logo from '../../assets/logo-white.png';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const textTopass = "Sitemap";
  const conHead = "Constact Us";

  return (
    <div className="footer-section">
      <div className='ft-container'>
        <img src={logo} alt='logo'/>
        <div className='site-map'>
          <h3>{textTopass}</h3>
            <p><a href='#home'>Home</a></p>
            <p><a href='#home'>About</a></p>
            <p><a href='#home'>Menu</a></p>
            <p><a href='#home'>Reservations</a></p>
            <p><a href='#home'>Order Online</a></p>
            <p><a href='#home'>Login</a></p>
        </div>
        <div className='contact-section'>
          <h3>{conHead}</h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className="white-icon" /> 678 Pisa Ave, Chicago, IL 60611</p>
          <p><FontAwesomeIcon icon={faPhone} className="white-icon" /> (312) 593-2744</p>
          <p><FontAwesomeIcon icon={faEnvelope} className="white-icon" /> customer@littlelemon.com</p>
        </div>

        <div className='connect'>
          <h3>Connect with us</h3>
          <a href='#'>
            <FontAwesomeIcon icon={faFacebook} className="white-icon"/>
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faInstagram} className="white-icon" />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faTwitter} className="white-icon" />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faYoutube} className="white-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer

// git pull origin main --rebase