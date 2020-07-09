import React from 'react';
import Head from 'next/head';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './styles.module.css';

const About: React.FC = () => (
  <div>
    <Head>
      <title>Best Bets</title>
      <link rel="icon" href="/pictures/favicon.ico" />
    </Head>
    <Header />
    <div className={styles.container}>
      <p>
        BestBets is not responsible for your bets. The recommended bet is based
        on real data but can obviously fail.
      </p>
      <p className={styles.playResponsibly}>
        <span>Play responsibly.</span>
      </p>
    </div>
    <Footer />
  </div>
);

export default About;
