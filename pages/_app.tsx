import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Layout from '@/components/layout/Layout';
import BackdropProvider from '@/components/backdrop/BackdropProvider';

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
      <BackdropProvider>
        <Head>
          <title>{config.appName}</title>
          <link rel="icon" href="/pictures/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BackdropProvider>
    </AuthProvider>
  );
};

export default BestBetsApp;
