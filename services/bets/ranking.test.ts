import { Standing } from '../standings/types';
import { getTeamRankingPoints } from './ranking';

const standings: Standing[] = [
  {
    teamId: 40,
    teamName: 'Manchester City',
    forme: 'WLWWL',
    rankInLeague: 2,
    leagueHomeStats: {
      matchsPlayed: 12,
      win: 9,
      draw: 1,
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
      win: 0,
      draw: 15,
      lose: 0,
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
      win: 14,
      draw: 0,
      lose: 0,
      goalsFor: 10,
      goalsAgainst: 10,
    },
    leagueAwayStats: {
      matchsPlayed: 15,
      win: 15,
      draw: 0,
      lose: 0,
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
];

const arsenal = {
  teamId: 50,
  teamName: 'Arsenal',
  logo: 'https://media.api-sports.io/football/teams/50.png',
  venueName: 'Etihad Stadium',
  venueCapacity: 55097,
  country: 'England',
  founded: '1880',
};

const manCity = {
  teamId: 40,
  teamName: 'Manchester City',
  logo: 'https://media.api-sports.io/football/teams/50.png',
  venueName: 'Etihad Stadium',
  venueCapacity: 55097,
  country: 'England',
  founded: '1880',
};

const chelsea = {
  teamId: 47,
  teamName: 'Chelsea',
  logo: 'https://media.api-sports.io/football/teams/50.png',
  venueName: 'Etihad Stadium',
  venueCapacity: 55097,
  country: 'England',
  founded: '1880',
};

const westHam = {
  teamId: 1,
  teamName: 'West Ham',
  logo: 'https://media.api-sports.io/football/teams/50.png',
  venueName: 'Etihad Stadium',
  venueCapacity: 55097,
  country: 'England',
  founded: '1880',
};

/* 
  arsenal:
    win: 10,
    draw: 17,
    lose: 2,
    Points: 10 * 3 + 17 = 47
    Max Points: 29 * 3 = 87
    Min Points: 0
    Final Points: 47-0/87-0=0,540229885
  manCity:
    win: 18,
    draw: 2,
    lose: 7,
  chelsea:
    win: 29,
    draw: 0,
    lose: 0,
  westHam:
    win: 19,
    draw: 3,
    lose: 7,
*/

describe('Ranking', () => {
  describe('getTeamRankingPoints', () => {
    test('should return the right ranking points', () => {
      expect(getTeamRankingPoints(arsenal, standings)).toBe(0.54);
      expect(getTeamRankingPoints(westHam, standings)).toBe(0.69);
      expect(getTeamRankingPoints(chelsea, standings)).toBe(1);
      expect(getTeamRankingPoints(manCity, standings)).toBe(0.691);
    });
  });
});
