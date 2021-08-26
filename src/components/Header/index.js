import React from 'react';
import { ReactComponent as Logo } from '../../assests/images/logo/logo.svg';
import {
  header,
  navMenu,
  navItem,
  navLink,
  hamburger,
  headerBtn,
} from './header.module.css';

import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

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
      <div className={headerBtn}>
        <Link to='/buynow' className='btn btn--primary'>
          Buy Now
        </Link>
      </div>

      <GiHamburgerMenu className={hamburger} />
    </header>
  );
};

export default Index;
