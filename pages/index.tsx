import React, { useEffect } from 'react';
import FixturesList from '@/components/fixturesList/FixturesList';

const Home: React.FC = () => {
  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker
  //       .register('/serviceWorker.js')
  //       .catch((err) =>
  //         console.error('Service worker registration failed', err),
  //       );
  //   } else {
  //     console.log('Service worker not supported');
  //   }
  // }, []);

  return <FixturesList />;
};

export default Home;
