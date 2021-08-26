import React from 'react';
import styles from './experience.module.css';
import img from '../../assests/images/dashkit.jpg';

import { ReactComponent as IconDesign } from '../../assests/images/icons/design.svg';
import { ReactComponent as IconDoc } from '../../assests/images/icons/doc.svg';
const Index = () => {
  return (
    <section className={'container'}>
      <div className={styles.sectionExperience}>
        <article className={styles.textContent}>
          <h2 className='heading-tertiary'>
            We have lots of experience
            <span> building Bootstrap themes.</span>
          </h2>

          <p className='description'>
            We've built well over a dozen Bootstrap themes and sold tens of
            thousands of copies.
          </p>

          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <IconDesign className={styles.cardIcon} />

              <div>
                <p className={styles.cardHeading}>
                  Bootstrap users since the beginning
                </p>

                <p className={styles.cardDescription}>
                  We've been developing with Bootstrap since it was publicly
                  released in 2011.
                </p>
              </div>
            </div>

            <div className={styles.icon}>
              <IconDoc className={styles.cardIcon} />

              <div>
                <p className={styles.cardHeading}>
                  Documentation for everything
                </p>

                <p className={styles.cardDescription}>
                  We've written extensive documentation for components and
                  tools, so you never have to reverse engineer anything.
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.imgContent}>
          <img src={img} alt='dashkit ' />
        </article>
      </div>
    </section>
  );
};

export default Index;
