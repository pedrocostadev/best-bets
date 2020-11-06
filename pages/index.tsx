import React, { useEffect } from 'react';

import FixturesList from '@/components/fixturesList/FixturesList';
import { UseBetsContext } from '@/hooks/useBets';
import betsApi from '@/services/bets';

import config from '../config.json';
import { FixtureWithBets } from 'types';

interface Props {
  fixtures: FixtureWithBets[];
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const fixtures = await betsApi.getLeaguesBets(config);
  return {
    props: { fixtures },
  };
}

const Home: React.FC<Props> = ({ fixtures }) => {
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
    <UseBetsContext.Provider value={{ fixtures }}>
      <FixturesList />
    </UseBetsContext.Provider>
  );
};

export default Home;
