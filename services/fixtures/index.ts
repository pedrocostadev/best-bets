import { ConfigLeague } from '../../types';
import rapidApiClient from '../rapidApi';
import { LeagueFixtures } from './types';
import nextFixturesMock from './mocks/fixtures.json';
import parser from './parser';
import { USER_MOCKED_DATA } from '../../utils';

const getLeagueFixtures = async (
  league: ConfigLeague,
): Promise<LeagueFixtures> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let fixturesData: any;

  if (USER_MOCKED_DATA) {
    console.info('Using next fixtures mocked data...');
    fixturesData = nextFixturesMock;
  } else {
    fixturesData = await rapidApiClient.get(
      `fixtures/league/${league.rapidApiId}/next/10`,
    );
  }
  return {
    leagueId: league.id,
    fixtures: parser.parseFixtures({ fixturesData, league }),
  };
};

const getFixtures = async (
  leagues: ConfigLeague[],
): Promise<LeagueFixtures[]> => {
  const allFixturesPromises = leagues.map((league) =>
    getLeagueFixtures(league),
  );
  const allFixtures = await Promise.all(allFixturesPromises);
  return allFixtures;
};

export default { getFixtures };
