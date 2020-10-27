import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import type { AppProps, AppContext } from 'next/app';

import './styles.css';
// import './styles/breakpoints.scss';
import config from '../config.json';
import { UseBetsContext } from '../hooks/useBets';
import betsApi from '../services/bets';
import { FixtureWithBets } from '../types';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';

type MyAppProps = AppProps & { fixtures: FixtureWithBets[] };

const MyApp = (props: MyAppProps): React.ReactElement => {
  const { Component, pageProps, fixtures } = props;
  return (
    <>
      <Head>
        <title>{config.appName}</title>
        <link rel="icon" href="/pictures/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <Main>
        <UseBetsContext.Provider value={{ fixtures }}>
          <Component {...pageProps} />
        </UseBetsContext.Provider>
      </Main>
      <Footer />
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const fixtures = await betsApi.getBets(config);
  return { ...appProps, fixtures };
};

export default MyApp;
