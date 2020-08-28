import React from 'react';
import logo from '../../images/udemy.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
           <header>
               <img src={logo} alt=""/>

              <nav>
                  <a href="categories">Catogories</a>
                  <a href="business">Udemy for business</a>
                  <a href="tech">Learn more on tech</a>
              </nav>
           </header>
        </div>
    );
};

export default Header;