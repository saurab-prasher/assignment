import React from 'react';
import styles from './hero.module.css';
import heroimg from '../../assests/images/hero-img.png';

const Index = () => {
  return (
    <main className={`${styles.heroSection} container`}>
      <div className={styles.textContent}>
        <h1 className='heading-primary'>
          Welcome to Landkit. Develop anything.
        </h1>
        <p className='description'>
          Build a beautiful, modern website with flexible Bootstrap components
          built from scratch.
        </p>
        <div className={styles.btnContainer}>
          <a href='#e' className='btn btn--primary'>
            View all pages &rarr;
          </a>

          <a href='#e' className='btn btn--tertiary'>
            Documentation
          </a>
        </div>
      </div>

      <div className='img-content'>
        <img src={heroimg} alt='Illustration of people talking' />
      </div>
    </main>
  );
};

export default Index;
