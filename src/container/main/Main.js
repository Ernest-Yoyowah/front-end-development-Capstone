import React from 'react'

import salad from '../../assets/greek salad.jpg';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Main = () => {
  return (
    <div className="main-section">
      <div className='main-top'>
        <h2>This week specials!</h2>
          <div className='menu-btn'>
            <a
                href='#order'
            >
              Online Menu
              </a>
          </div>
      </div>

      <div className='week-specials'>
        <div className='w-container'>
          <div className='meal-card'>
            <div className='meal-card-img'>
              <img src={salad} alt='salad'/>
            </div>
            <div className='meal-card-header'>
              <h3>Waakye</h3>
              <span>$12.99</span>
            </div>
            <div className='meal-card-footer'>
              <p>
                The famous greek salad of crispy lettuce, peppers,
                olives and our Chicago style feta cheese, garnished
                with crunchy garlic and rosemary croutons.
              </p>
            </div>
            <div className='footer-btn'>
              <a
                href='#order'
              >
                Order a delivery
              </a>
              </div>
          </div>
        </div>

        <div className='w-container'>
          <div className='meal-card'>
            <div className='meal-card-img'>
              <img src={salad} alt='salad'/>
            </div>
            <div className='meal-card-header'>
              <h3>Waakye</h3>
              <span>$12.99</span>
            </div>
            <div className='meal-card-footer'>
              <p>
                The famous greek salad of crispy lettuce, peppers,
                olives and our Chicago style feta cheese, garnished
                with crunchy garlic and rosemary croutons.
              </p>
            </div>
            <div className='footer-btn'>
              <a
                href='#order'
              >
                Order a delivery
              </a>
              </div>
          </div>
        </div>

        <div className='w-container'>
          <div className='meal-card'>
            <div className='meal-card-img'>
              <img src={salad} alt='salad'/>
            </div>
            <div className='meal-card-header'>
              <h3>Waakye</h3>
              <span>$12.99</span>
            </div>
            <div className='meal-card-footer'>
              <p>
                The famous greek salad of crispy lettuce, peppers,
                olives and our Chicago style feta cheese, garnished
                with crunchy garlic and rosemary croutons.
              </p>
            </div>
            <div className='footer-btn'>
              <a
                href='#order'
              >
                Order a delivery
              </a>
              </div>
          </div>
        </div>

      </div>

      {/* <div className='week-specials'> */}

      {/* </div> */}



    </div>
  )
}

export default Main