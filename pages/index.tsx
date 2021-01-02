import React from 'react';

import FixturesList from '@/components/fixturesList/FixturesList';
import { UseBetsContext } from '@/hooks/useBets';
import usePrivatePage from '@/hooks/usePrivatePage';
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
  usePrivatePage();
  return (
    <UseBetsContext.Provider value={{ fixturesInfo }}>
      <FixturesList />
    </UseBetsContext.Provider>
  );
};

export default Home;
