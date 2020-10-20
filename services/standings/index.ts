import { ConfigLeague } from '../../types';
import { USER_MOCKED_DATA } from '../../utils';
import rapidApiClient from '../rapidApi/';
import standingsMock from './mocks/standings.json';
import parser from './parser';
import { LeagueStandings } from './types';

const getLeagueStandings = async (
  league: ConfigLeague,
): Promise<LeagueStandings> => {
  let standingsData;

  if (USER_MOCKED_DATA) {
    console.info('Using standings mocked data...');
    standingsData = standingsMock;
  } else {
    standingsData = await rapidApiClient.get(
      `leagueTable/${league.rapidApiId}`,
    );
  }
  return {
    leagueId: league.id,
    standings: parser.parseStandings({ standingsData }),
  };
};

const getStandings = async (
  leagues: ConfigLeague[],
): Promise<LeagueStandings[]> => {
  const allStandingsPromises = leagues.map((league) =>
    getLeagueStandings(league),
  );
  const allStandings = await Promise.all(allStandingsPromises);

  return allStandings;
};

export default {
  getStandings,
};
