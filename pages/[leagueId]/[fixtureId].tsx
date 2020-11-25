import React from 'react';
import { AppContext } from 'next/app';

import FixtureDetail from '@/components/fixtureDetail/FixtureDetail';
import FixtureTeamsLogos from '@/components/fixtureTeamsLogos/FixtureTeamsLogos';
import Bet from '@/components/bet/Bet';
import betsApi from '@/services/bets';

import { FixtureInfo } from 'types';
import config from '../../config.json';

interface Props {
  fixture: FixtureInfo;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getQueryParam = ({ query }: any, paramName: string): number =>
  parseInt(query[paramName] as string);

export async function getServerSideProps(
  context: AppContext,
): Promise<{ props: Props }> {
  const fixtureId = getQueryParam(context, 'fixtureId');
  const leagueId = getQueryParam(context, 'leagueId');
  const configLeague = config.leagues.find((league) => league.id === leagueId);

  const fixture = await betsApi.getFixtureBet(
    configLeague,
    config.season,
    fixtureId,
  );
  return {
    props: { fixture },
  };
}

const Fixture: React.FC<Props> = ({ fixture }) => {
  return (
    <>
      {!fixture && <p>Not a valid fixture</p>}
      {fixture && (
        <>
          <FixtureTeamsLogos fixtureInfo={fixture} />
          <FixtureDetail fixtureInfo={fixture} />
          <Bet fixture={fixture} />
        </>
      )}
    </>
  );
};

export default Fixture;
