import React from 'react';
import styles from './features.module.css';
import { ReactComponent as IconDev } from '../../assests/images/icons/dev.svg';
import { ReactComponent as IconDesign } from '../../assests/images/icons/design.svg';
import { ReactComponent as IconDoc } from '../../assests/images/icons/doc.svg';

const Index = () => {
  return (
    <section className={`${styles.featuresSection} container`}>
      <article className={styles.featuresCard}>
        <IconDev className={styles.cardIcon} />

        <p className={styles.cardHeading}>Built for developers</p>

        <p className={styles.cardDescription}>
          Landkit is built to make your life easier. Variables, build tooling,
          documentation, and reusable components.
        </p>
      </article>
      <article className={styles.featuresCard}>
        <IconDesign className={styles.cardIcon} />
        <p className={styles.cardHeading}>Designed to be modern</p>
        <p className={styles.cardDescription}>
          Designed with the latest design trends in mind. Landkit feels modern,
          minimal, and beautiful.
        </p>
      </article>
      <article className={styles.featuresCard}>
        <IconDoc className={styles.cardIcon} />
        <p className={styles.cardHeading}>Documentation for everything</p>

        <p className={styles.cardDescription}>
          We've written extensive documentation for components and tools, so you
          never have to reverse engineer anything.
        </p>
      </article>
    </section>
  );
};

export default Index;
