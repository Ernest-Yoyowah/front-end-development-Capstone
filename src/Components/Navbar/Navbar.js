import React from 'react'
import logo from '../../assets/Logo .svg'

import './navbar.css';

function Navbar() {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={logo} alt='logo'/>
      </div>
      <ul className='app__navbar-links'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/menu'>Menu</a>
        </li>
        <li>
          <a href='/reserve'>Reservation</a>
        </li>
        <li>
          <a href='/order'>Order Online</a>
        </li>
        <li>
          <a href='/login'>Login</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar