import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Main from '@/components/main/Main';

import config from '../config.json';
import './styles.css';

const BestBetsApp = (props: AppProps): React.ReactElement => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>{config.appName}</title>
        <link rel="icon" href="/pictures/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
};

export default BestBetsApp;
