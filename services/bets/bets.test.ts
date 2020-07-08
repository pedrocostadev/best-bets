import getBets from './bets';
import { Standing, LeagueData, Reputation } from '../../types';

// jest.mock('../rapidApi').mockReturnValue(Promise.resolve(new Response('4')));
//import rapidApi from '../rapidApi';
//rapidApi.mockReturnValue(Promise.resolve(new Response('4')));

const standings: Standing[] = [
  {
    teamId: 40,
    teamName: 'Manchester City',
    forme: 'WLWWL',
    rankInLeague: 2,
    leagueHomeStats: {
      matchsPlayed: 14,
      win: 10,
      draw: 2,
      lose: 2,
      goalsFor: 36,
      goalsAgainst: 12,
    },
    leagueAwayStats: {
      matchsPlayed: 15,
      win: 9,
      draw: 1,
      lose: 5,
      goalsFor: 20,
      goalsAgainst: 55,
    },
  },
  {
    teamId: 50,
    teamName: 'Arsenal',
    forme: 'WLWWL',
    rankInLeague: 1,
    leagueHomeStats: {
      matchsPlayed: 14,
      win: 10,
      draw: 2,
      lose: 2,
      goalsFor: 36,
      goalsAgainst: 2,
    },
    leagueAwayStats: {
      matchsPlayed: 15,
      win: 9,
      draw: 1,
      lose: 5,
      goalsFor: 35,
      goalsAgainst: 19,
    },
  },
  {
    teamId: 47,
    teamName: 'Chelsea',
    forme: 'WLWWL',
    rankInLeague: 3,
    leagueHomeStats: {
      matchsPlayed: 14,
      win: 10,
      draw: 2,
      lose: 2,
      goalsFor: 10,
      goalsAgainst: 10,
    },
    leagueAwayStats: {
      matchsPlayed: 15,
      win: 9,
      draw: 1,
      lose: 5,
      goalsFor: 35,
      goalsAgainst: 2,
    },
  },
  {
    teamId: 1,
    teamName: 'West Ham',
    forme: 'WLWWL',
    rankInLeague: 6,
    leagueHomeStats: {
      matchsPlayed: 14,
      win: 10,
      draw: 2,
      lose: 2,
      goalsFor: 12,
      goalsAgainst: 77,
    },
    leagueAwayStats: {
      matchsPlayed: 15,
      win: 9,
      draw: 1,
      lose: 5,
      goalsFor: 35,
      goalsAgainst: 19,
    },
  },
  {
    teamId: 2,
    teamName: 'Leiceiter',
    forme: 'WLWWL',
    rankInLeague: 6,
    leagueHomeStats: {
      matchsPlayed: 14,
      win: 10,
      draw: 2,
      lose: 2,
      goalsFor: 11,
      goalsAgainst: 77,
    },
    leagueAwayStats: {
      matchsPlayed: 15,
      win: 9,
      draw: 1,
      lose: 5,
      goalsFor: 35,
      goalsAgainst: 19,
    },
  },
];

const arsenal = {
  teamId: 50,
  teamName: 'name not need, these methods use team Id',
  logo: 'https://media.api-sports.io/football/teams/50.png',
  venueName: 'Etihad Stadium',
  venueCapacity: 55097,
  country: 'England',
  founded: '1880',
};

const manCity = {
  teamId: 40,
  teamName: 'name not need, these methods use team Id',
  logo: 'https://media.api-sports.io/football/teams/50.png',
  venueName: 'Etihad Stadium',
  venueCapacity: 55097,
  country: 'England',
  founded: '1880',
};

const chelsea = {
  teamId: 47,
  teamName: 'name not need, these methods use team Id',
  logo: 'https://media.api-sports.io/football/teams/50.png',
  venueName: 'Etihad Stadium',
  venueCapacity: 55097,
  country: 'England',
  founded: '1880',
};

const westHam = {
  teamId: 1,
  teamName: 'name not need, these methods use team Id',
  logo: 'https://media.api-sports.io/football/teams/50.png',
  venueName: 'Etihad Stadium',
  venueCapacity: 55097,
  country: 'England',
  founded: '1880',
};

const nextFixtures = [
  {
    homeTeam: {
      teamId: 1,
      teamName: 'westHam',
      logo: 'https://media.api-sports.io/football/teams/41.png',
      venueName: '',
      venueCapacity: 1,
      country: '',
      founded: '',
    },
    awayTeam: {
      teamId: 50,
      teamName: 'Arsenal',
      logo: 'https://media.api-sports.io/football/teams/42.png',
      venueName: '',
      venueCapacity: 1,
      country: '',
      founded: '',
    },
    venue: "St. Mary's Stadium",
    eventDate: '2020-06-25T17:00:00+00:00',
    leagueId: 524,
  },
  {
    homeTeam: {
      teamId: 47,
      teamName: 'Chelsea',
      logo: 'https://media.api-sports.io/football/teams/49.png',
      venueName: '',
      venueCapacity: 1,
      country: '',
      founded: '',
    },
    awayTeam: {
      teamId: 40,
      teamName: 'Manchester City',
      logo: 'https://media.api-sports.io/football/teams/50.png',
      venueName: '',
      venueCapacity: 1,
      country: '',
      founded: '',
    },
    venue: 'Stamford Bridge',
    eventDate: '2020-06-25T19:15:00+00:00',
    leagueId: 524,
  },
];

const getLeaguesMockResult: LeagueData = {
  standings,
  teams: [arsenal, manCity, chelsea, westHam],
  nextFixtures,
};

const getReputationsMockResult: Reputation[] = [
  { teamId: 50, name: 'arsenal', reputation: 5 },
  { teamId: 47, name: 'chelsea', reputation: 3.5 },
  { teamId: 1, name: 'West Ham', reputation: 4 },
  { teamId: 40, name: 'Manchester City', reputation: 5 },
];

jest.mock('../rapidApi', () => ({
  getLeagues: () =>
    new Promise((resolutionFunc) => resolutionFunc(getLeaguesMockResult)),
}));

jest.mock('../reputationsApi', () => ({
  getReputations: () =>
    new Promise((resolutionFunc) => resolutionFunc(getReputationsMockResult)),
}));

describe('Bets', () => {
  describe('getBets', () => {
    test('should return true when the team have one of the best 3 attacks', async () => {
      const result = await getBets({ leagueIds: [524] });
      const firstGame = result[0];
      const secondGame = result[1];

      expect(firstGame).toHaveProperty('homeTeamPoints', 0.688);
      expect(firstGame).toHaveProperty('homeTeam.teamName', 'westHam');
      expect(firstGame).toHaveProperty('awayTeamPoints', 0.827);
      expect(firstGame).toHaveProperty('awayTeam.teamName', 'Arsenal');
      expect(firstGame).toHaveProperty('betDetails');

      expect(secondGame).toHaveProperty('homeTeamPoints', 0.694);
      expect(secondGame).toHaveProperty('homeTeam.teamName', 'Chelsea');
      expect(secondGame).toHaveProperty('awayTeamPoints', 0.777);
      expect(secondGame).toHaveProperty('awayTeam.teamName', 'Manchester City');
      expect(secondGame).toHaveProperty('betDetails');
    });
  });
});
