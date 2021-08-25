import React from 'react';
import styles from './companies.module.css';
import dribble from '../../assests/images/company-logos/Dribbble Logo.png';
import facebook from '../../assests/images/company-logos/Facebook Logo.png';
import pinterest from '../../assests/images/company-logos/Pinterest Logo.png';
import slack from '../../assests/images/company-logos/Slack Logo.png';
import twitter from '../../assests/images/company-logos/Twitter Logo.png';
import youtube from '../../assests/images/company-logos/Youtube Logo.png';

const Index = () => {
  return (
    <section className={`${styles.companiesSection} container`}>
      <img src={dribble} alt='dribble logo' />
      <img src={facebook} alt='facebook logo' />
      <img src={pinterest} alt='pinterest logo' />
      <img src={slack} alt='slack logo' />
      <img src={twitter} alt='twitter logo' />
      <img src={youtube} alt='youtube logo' />
    </section>
  );
};

export default Index;
