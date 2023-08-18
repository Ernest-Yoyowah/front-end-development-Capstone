import React, { useState } from 'react'
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { Route, Routes, NavLink } from 'react-router-dom';

import views from '../../views';

import './Navbar.css'
import { Header, Main, Footer, Testimonial, About } from '../../container';
import AboutPage from '../../views/aboutpage/AboutPage';
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
            <NavLink
              to=''
              className={activeSection === 'home' ? 'active-link' : ''}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutpage"
              className={activeSection === "about" ? "active-link" : ""}
              onClick={() => handleLinkClick("about")}
            >
              About
          </NavLink>
          <NavLink
              to='/menu'
              className={activeSection === 'menu' ? 'active-link' : ''}
              onClick={() => handleLinkClick('menu')}
            >
            Menu
          </NavLink>
          <NavLink
              to='/reservation'
              className={activeSection === 'reservation' ? 'active-link' : ''}
              onClick={() => handleLinkClick('reservation')}
            >
            Reservation
          </NavLink>
          <NavLink
              to='/order'
              className={activeSection === 'order' ? 'active-link' : ''}
              onClick={() => handleLinkClick('order')}
            >
            Order Online
          </NavLink>
          <NavLink
              to='/login'
              className={activeSection === 'login' ? 'active-link' : ''}
              onClick={() => handleLinkClick('login')}
            >
            Login
          </NavLink>

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

                <Routes>
                  <Route path='/about' element={<About />}
                  className={activeSection === 'about' ? 'active-link' : ''}
                  onClick={() => handleLinkClick('about')}
                  />
                  <Route path='/navbar' element={<Navbar />}/>
                </Routes>


                  <p>
                    <a
                      href='#home'
                      className={activeSection === 'home' ? 'active-link' : ''}
                      onClick={() => handleLinkClick('home')}
                    >
                      Home
                    </a>
                  </p>
                  {/*<p>
                    <a
                      href='#about'
                      className={activeSection === 'about' ? 'active-link' : ''}
                      onClick={() => handleLinkClick('about')}
                    >
                      About
                    </a>
                  </p> */}
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