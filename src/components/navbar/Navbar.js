import React, { useState } from 'react'

import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import './Navbar.css'

import logo from '../../assets/Logo .svg';

const Navbar = () => {

  const [activeSection, setActiveSection] = useState("home")

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };


  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app__nav'>
      <div className='app__nav-logo'>
        <a href='/'>
          <img src={logo} alt='logo' style={{ width: "15rem" }} />
        </a>
      </div>
        <div className="left-container">
          <div className='app__nav-links'>
            <p>
                <a
                  href='#home'
                  className={activeSection === 'home' ? 'active-link' : ''}
                  onClick={() => handleLinkClick('home')}
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  href='#about'
                  className={activeSection === 'about' ? 'active-link' : ''}
                  onClick={() => handleLinkClick('about')}
                >
                  About
                </a>
              </p>
              <p>
                <a
                  href='#menu'
                  className={activeSection === 'menu' ? 'active-link' : ''}
                  onClick={() => handleLinkClick('menu')}
                >
                  Menu
                </a>
              </p>
              <p>
                <a
                  href='#reservation'
                  className={activeSection === 'reserve' ? 'active-link' : ''}
                  onClick={() => handleLinkClick('reserve')}
                >
                  Reservations
                </a>
              </p>
              <p>
                <a
                  href='#order'
                  className={activeSection === 'order' ? 'active-link' : ''}
                  onClick={() => handleLinkClick('order')}
                >
                  Order Online
                </a>
              </p>
              <p>
                <a
                  href='#login'
                  className={activeSection === 'login' ? 'active-link' : ''}
                  onClick={() => handleLinkClick('login')}
                >
                  Login
                </a>
              </p>
          </div>
      </div>


      <div className='app__nav-links'>
      </div>

      <div className='nav-menu' >
          <div className='H-b'>
            {toggleMenu
            ? <RiCloseLine onClick={() => setToggleMenu(false)}/>
            : <RiMenuLine onClick={() => setToggleMenu(true)}/>
            }
          </div>
            {toggleMenu && (
              <div className="nav-menu_M ">
                <div className="nav-menu-links">
                  <p>
                    <a
                      href='#home'
                      className={activeSection === 'home' ? 'active-link' : ''}
                      onClick={() => handleLinkClick('home')}
                    >
                      Home
                    </a>
                  </p>
                  <p>
                    <a
                      href='#about'
                      className={activeSection === 'about' ? 'active-link' : ''}
                      onClick={() => handleLinkClick('about')}
                    >
                      About
                    </a>
                  </p>
                  <p>
                    <a
                      href='#menu'
                      className={activeSection === 'menu' ? 'active-link' : ''}
                      onClick={() => handleLinkClick('menu')}
                    >
                      Menu
                    </a>
                  </p>
                  <p>
                    <a
                      href='#reservation'
                      className={activeSection === 'reserve' ? 'active-link' : ''}
                      onClick={() => handleLinkClick('reserve')}
                    >
                      Reservations
                    </a>
                  </p>
                  <p>
                    <a
                      href='#order'
                      className={activeSection === 'order' ? 'active-link' : ''}
                      onClick={() => handleLinkClick('order')}
                    >
                      Order Online
                    </a>
                  </p>
                  <p>
                    <a
                      href='#login'
                      className={activeSection === 'login' ? 'active-link' : ''}
                      onClick={() => handleLinkClick('login')}
                    >
                      Login
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>

    </nav>
  )
}

export default Navbar