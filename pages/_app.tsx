import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Main from '@/components/main/Main';
import { AuthProvider } from '@/hooks/useAuth';

import config from '../config.json';
import './styles.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const BestBetsApp = (props: AppProps): React.ReactElement => {
  const { Component, pageProps } = props;
  return (
    <AuthProvider>
      <>
        <Head>
          <title>{config.appName}</title>
          <link rel="icon" href="/pictures/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </>
    </AuthProvider>
  );
};

export default BestBetsApp;
