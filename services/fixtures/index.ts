import { ConfigLeague } from '../../types';
import rapidApiClient from '../rapidApi';
import { Fixture, LeagueFixtures } from './types';
import parser from './parser';
import { USER_MOCKED_DATA } from '../../utils';

const getLeagueFixtures = async (
  league: ConfigLeague,
): Promise<LeagueFixtures> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let fixturesData: any;

  if (USER_MOCKED_DATA) {
    console.info('Using next fixtures mocked data...');
    fixturesData = await require('./mocks/fixtures.json');
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

const getLeaguesFixtures = async (
  leagues: ConfigLeague[],
): Promise<LeagueFixtures[]> => {
  const allFixturesPromises = leagues.map((league) =>
    getLeagueFixtures(league),
  );
  const allFixtures = await Promise.all(allFixturesPromises);
  return allFixtures;
};

const getLeagueFixture = async (
  league: ConfigLeague,
  fixtureId: number,
): Promise<Fixture> => {
  const fixturesData = await rapidApiClient.get(`fixtures/id/${fixtureId}`);
  const [fixture] = parser.parseFixtures({
    fixturesData,
    league,
  });
  return fixture;
};

export default { getLeaguesFixtures, getLeagueFixtures, getLeagueFixture };
