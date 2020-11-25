import React, { useEffect } from 'react';

import FixturesList from '@/components/fixturesList/FixturesList';
import { UseBetsContext } from '@/hooks/useBets';
import betsApi from '@/services/bets';

import config from '../config.json';
import { FixtureInfo } from 'types';

interface Props {
  fixturesInfo: FixtureInfo[];
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const fixturesInfo = await betsApi.getLeaguesBets(config);
  return {
    props: { fixturesInfo },
  };
}

const Home: React.FC<Props> = ({ fixturesInfo }) => {
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
    <UseBetsContext.Provider value={{ fixturesInfo }}>
      <FixturesList />
    </UseBetsContext.Provider>
  );
};

export default Home;
