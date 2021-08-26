import React from 'react';
import styles from './clients.module.css';
import { AiOutlineQuestion } from 'react-icons/ai';
const Index = () => {
  return (
    <section className={styles.sectionClients}>
      <div className='container'>
        <div className={styles.sectionInner}>
          <div className={styles.gridItem}>
            <div className={styles.icon}>
              <AiOutlineQuestion />
            </div>

            <div className={styles.textContent}>
              <h4>Can I use Landkit for my clients?</h4>
              <p>
                Absolutely. The Bootstrap Themes license allows you to build a
                website for personal use or for a client.
              </p>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.icon}>
              <AiOutlineQuestion />
            </div>

            <div className={styles.textContent}>
              <h4>Is there a money back guarantee?</h4>
              <p>
                Yup! Bootstrap Themes come with a satisfaction guarantee. Submit
                a return and get your money back.
              </p>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.icon}>
              <AiOutlineQuestion />
            </div>

            <div className={styles.textContent}>
              <h4>Do I get free updates?</h4>
              <p>
                Yes. We update all of our themes with each Bootstrap update,
                plus are constantly adding new components, pages, and features
                to our themes.
              </p>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.icon}>
              <AiOutlineQuestion />
            </div>

            <div className={styles.textContent}>
              <h4>Does it work with Rails? React? Laravel?</h4>
              <p>
                Yes. Landkit has basic CSS/JS files you can include. If you want
                to enable deeper customization, you can integrate it into your
                assets pipeline or build processes.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.getStartNow}>
          <h2 className='heading-secondary'>Get Landkit and save your time.</h2>

          <p>
            Stop wasting time trying to do it the "right way" and build a site
            from scratch. Landkit is faster, easier, and you still have complete
            control.
          </p>

          <a href='!#'>Buy it now &rarr; </a>
        </div>
      </div>
    </section>
  );
};

export default Index;
