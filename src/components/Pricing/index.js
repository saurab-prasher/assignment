import React from 'react';
import styles from './price.module.css';
import img from '../../assests/images/illustration-2.png';
import { AiOutlineCheck } from 'react-icons/ai';
const Index = () => {
  return (
    <section className={styles.sectionPricing}>
      <div className='container'>
        <article className={styles.business}>
          <div className={styles.textContent}>
            <h3 className='heading-tertiary'>
              Stay focused on your business.{' '}
              <span>Let us handle the design.</span>
            </h3>

            <p className='description'>
              You have a business to run. Stop worring about cross-browser bugs,
              designing new pages, keeping your components up to date. Let us do
              that for you.
            </p>

            <div className={styles.stats}>
              <div>
                <h4>100%</h4>

                <p>Satisfaction</p>
              </div>

              <div>
                <h4>24 / 7</h4>
                <p>Support</p>
              </div>

              <div>
                <h4>100k+</h4>
                <p>Sales</p>
              </div>
            </div>
          </div>

          <div className={styles.imgContent}>
            <img src={img} alt='illustration' />
          </div>
        </article>

        <article className={styles.pricing}>
          <div className={styles.pricingHeading}>
            <h2 className='heading-secondary'>Fair, simple pricing for all.</h2>

            <p className='description'>
              All types of businesses need access to development resources, so
              we give you the option to decide how much you need to use.
            </p>

            <form className={styles.pricingForm}>
              <span>Annual</span>

              <div className='toggle-switch'>
                <label className='switch'>
                  <input type='checkbox' />
                  <span className='slider round'></span>
                </label>
              </div>

              <span>Monthly</span>
            </form>
          </div>

          <div className={styles.pricingCard}>
            <div className={styles.pricingCardPrimary}>
              <div className={styles.pricingCardInner}>
                <span className={styles.package}>Standard</span>

                <div className={styles.monthlyPrice}>
                  <div>
                    $ <span>29</span> /mo
                  </div>
                  per seat
                </div>

                <div className={styles.features}>
                  <div>
                    <div className={styles.checkmark}>
                      <AiOutlineCheck />
                    </div>
                    <p>Rich, responsive landing pages</p>
                  </div>
                  <div>
                    <div className={styles.checkmark}>
                      <AiOutlineCheck />
                    </div>
                    <p>100+ styled components</p>
                  </div>
                  <div>
                    <div className={styles.checkmark}>
                      <AiOutlineCheck />
                    </div>
                    <p>Flexible, simple license</p>
                  </div>
                  <div>
                    <div className={styles.checkmark}>
                      <AiOutlineCheck />
                    </div>
                    <p>Speedy build tooling</p>
                  </div>
                  <div>
                    <div className={styles.checkmark}>
                      <AiOutlineCheck />
                    </div>
                    <p>6 months free support included</p>
                  </div>
                </div>
              </div>
              <a className={styles.cta} href='#!'>
                Get it now
              </a>
            </div>

            <div className={styles.pricingCardSecondary}>
              <div className={styles.pricingCardInner}>
                <span className={styles.package}>Enterprise</span>

                <p className='description'>
                  We offer variable pricing with discounts for larger
                  organizations. Get in touch with us and we’ll figure out
                  something that works for everyone.
                </p>
              </div>
              <a className={styles.cta} href='#!'>
                Contact us
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Index;
