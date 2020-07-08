import React, { useEffect } from 'react';
import Head from 'next/head';
import Dashboard from '../components/dashboard/Dashboard';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { GetStaticProps } from 'next';
import { FixtureWithBets } from '../types';
import config from '../config.json';
import betsApi from '../services/bets';

interface Props {
  nextFixtures: FixtureWithBets[];
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { nextFixtures: await betsApi.getBets({ leagueIds: config.leagues }) },
});

const Home: React.FC<Props> = ({ nextFixtures }) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/serviceWorker.js')
        .catch((err) =>
          console.error('Service worker registration failed', err),
        );
    } else {
      console.log('Service worker not supported');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Best Bets</title>
        <link rel="icon" href="/pictures/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <Dashboard nextFixtures={nextFixtures} />
      <Footer />
    </div>
  );
};

export default Home;
