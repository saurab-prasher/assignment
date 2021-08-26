import React from 'react';
import { ReactComponent as Logo } from '../../assests/images/logo/logo.svg';
import {
  header,
  navMenu,
  navItem,
  navLink,
  hamburger,
  headerBtn,
  logoContainer,
} from './header.module.css';
import { Link, useLocation } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';

const Index = () => {
  const { pathname: location } = useLocation();

  return (
    <header className={`${header} container`}>
      <div className={logoContainer}>
        <Link to='/'>
          <Logo />
        </Link>
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
        {location === '/buynow' ? (
          <Link to='/' className='btn btn--primary'>
            back home
          </Link>
        ) : (
          <Link to='/buynow' className='btn btn--primary'>
            Buy Now
          </Link>
        )}
      </div>

      <GiHamburgerMenu className={hamburger} />
    </header>
  );
};

export default Index;
