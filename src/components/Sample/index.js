import React from 'react';
import styles from './sample.module.css';
import formImg from '../../assests/images/form-img.jpg';
import { AiOutlineCheck } from 'react-icons/ai';

const Index = () => {
  return (
    <section className={styles.sectionSample}>
      <div className={`${styles.sectionSampleInner} container`}>
        <div className={styles.sampleForm}>
          <div className='clip'>
            <img
              src={formImg}
              alt='people talking'
              className={styles.formImg}
            />
          </div>
          <form className={styles.sampleForm}>
            <div className='form-group'>
              <input required type='text' placeholder='Name' />
            </div>
            <div className='form-group'>
              <input required type='email' placeholder='Email' />
            </div>
            <div className='form-group'>
              <input required type='password' placeholder='Password' />
            </div>

            <button>Download a sample</button>
          </form>
        </div>

        <div className={styles.textContent}>
          <h3 className='heading-tertiary'>
            The most useful resource ever created for designers.
          </h3>

          <p className='description'>
            Using Landkit to build your site means never worrying about
            designing another page or cross browser compatibility. Our
            ever-growing library of components and pre-designed layouts will
            make your life easier.
          </p>

          <div className={styles.features}>
            <div>
              <div className={styles.checkmark}>
                <AiOutlineCheck />
              </div>
              <p>Lifetime updates</p>
            </div>

            <div>
              <div className={styles.checkmark}>
                <AiOutlineCheck />
              </div>
              <p>Tons of assests</p>
            </div>
            <div>
              <div className={styles.checkmark}>
                <AiOutlineCheck />
              </div>
              <p>Tech support</p>
            </div>
            <div>
              <div className={styles.checkmark}>
                <AiOutlineCheck />
              </div>
              <p>Integration ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
