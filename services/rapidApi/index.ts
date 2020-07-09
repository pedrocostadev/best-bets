import rapidApiClient from './rapidApi.client';
import rapidApiParser from './rapidApi.parser';
import { LeagueData } from '../../types';

import nextFixturesMock from './mocks/nextFixtures.json';
import standingsMock from './mocks/standings.json';
import teamsMock from './mocks/teams.json';

const getLeague = async ({
  leagueId,
}: {
  leagueId: number;
}): Promise<LeagueData> => {
  const useMockedData = process.env.NEXT_PUBLIC_MOCKED_DATA === 'true';
  let data;

  if (useMockedData) {
    console.info('Using mocked data...');
    data = [nextFixturesMock, standingsMock, teamsMock];
  } else {
    data = await Promise.all([
      rapidApiClient.get(`fixtures/league/${leagueId}/next/10`),
      rapidApiClient.get(`leagueTable/${leagueId}`),
      rapidApiClient.get(`teams/league/${leagueId}`),
    ]);
  }

  return {
    nextFixtures: rapidApiParser.parseFixtures(data[0].data.api),
    standings: rapidApiParser.parseStandings(data[1].data.api.standings[0]),
    teams: rapidApiParser.parseTeams(data[2].data.api),
  };
};

const getLeagues = async ({
  leagueIds,
}: {
  leagueIds: number[];
}): Promise<LeagueData> => {
  const getAllLeaguesPromises = leagueIds.map((leagueId) =>
    getLeague({ leagueId }),
  );
  const allLeaguesArrays = await Promise.all(getAllLeaguesPromises);
  const footballData = allLeaguesArrays.reduce(
    (allLeagues: LeagueData, current: LeagueData) => ({
      nextFixtures: [...allLeagues.nextFixtures, ...current.nextFixtures],
      teams: [...allLeagues.teams, ...current.teams],
      standings: [...allLeagues.standings, ...current.standings],
    }),
    {
      nextFixtures: [],
      teams: [],
      standings: [],
    },
  );
  return footballData as LeagueData;
};

export default {
  getLeague,
  getLeagues,
};
