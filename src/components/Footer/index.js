import React from 'react';
import styles from './footer.module.css';

import { ReactComponent as Logo } from '../../assests/images/logo/logo.svg';

const Index = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footerInner}>
          <div className={styles.footerItem}>
            <Logo />

            <p className={styles.footerItemHeading}>A better way to build.</p>

            <ul>
              <li>
                <a href='#!'>instaIcon</a>
              </li>
              <li>
                <a href='#!'>FacebookIcon</a>
              </li>
              <li>
                <a href='#!'>TwitterIcon</a>
              </li>
              <li>
                <a href='#!'>PinterestIcon</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerItem}>
            <h6 className={styles.footerItemHeading}>Products</h6>

            <ul className={styles.footerItemList}>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Page Builder
                </a>
              </li>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  UI Kit
                </a>
              </li>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Styleguide
                </a>
              </li>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Documentation
                </a>
              </li>
              <li>
                <a href='#!' className='text-reset'>
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <h6 className={styles.footerItemHeading}>Services</h6>

            <ul className={styles.footerItemList}>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Documentation
                </a>
              </li>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Changelog
                </a>
              </li>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Pagebuilder
                </a>
              </li>
              <li>
                <a href='#!' className='text-reset'>
                  UI Kit
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <h6 className={styles.footerItemHeading}>Connect</h6>

            <ul className={styles.footerItemList}>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Page Builder
                </a>
              </li>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  UI Kit
                </a>
              </li>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Styleguide
                </a>
              </li>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Documentation
                </a>
              </li>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Changelog
                </a>
              </li>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Documentation
                </a>
              </li>
              <li>
                <a href='#!' className='text-reset'>
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <h6 className={styles.footerItemHeading}>Legal</h6>

            <ul className={styles.footerItemList}>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Documentation
                </a>
              </li>
              <li className='mb-3'>
                <a href='#!' className='text-reset'>
                  Changelog
                </a>
              </li>
              <li>
                <a href='#!' className='text-reset'>
                  Pagebuilder
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
