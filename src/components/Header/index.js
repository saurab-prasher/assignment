import React from 'react';
import { ReactComponent as Logo } from '../../assests/images/logo/logo.svg';
import { header, navMenu, navItem, navLink } from './header.module.css';

const Index = () => {
  return (
    <header className={`${header} container`}>
      <div className='logo-container'>
        <Logo />
      </div>
      <nav className='navbar'>
        <ul className={navMenu}>
          <li className={navItem}>
            <a href='#s' className={navLink}>
              Landings
            </a>
          </li>
          <li className={navItem}>
            <a href='#s' className={navLink}>
              Pages
            </a>
          </li>
          <li className={navItem}>
            <a href='#s' className={navLink}>
              Account
            </a>
          </li>
          <li className={navItem}>
            <a href='#s' className={navLink}>
              Documentation
            </a>
          </li>
        </ul>
      </nav>

      <div className='header-btn'>
        <a href='#a' className='btn btn--primary'>
          Buy Now
        </a>
      </div>
    </header>
  );
};

export default Index;
