import { getShapePoints, getTeamShapePoints } from './shape';
import { Standing } from '../../types';

const standings: Standing[] = [
  {
    teamId: 40,
    teamName: 'Manchester City',
    forme: 'WLDDD',
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
    forme: 'WLWDL',
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

describe('Shape', () => {
  describe('getShapePoints', () => {
    test('should return the right shape points', () => {
      expect(getShapePoints('WWWWW')).toBe(15);
      expect(getShapePoints('WWWWD')).toBe(13);
      expect(getShapePoints('wwwwl')).toBe(12);
      expect(getShapePoints('LllLL')).toBe(0);
      expect(getShapePoints('DdDDD')).toBe(5);
      expect(getShapePoints('WDWDW')).toBe(11);
    });
  });
  describe('getTeamShapePoints', () => {
    test('should return the right shape points', () => {
      expect(getTeamShapePoints(arsenal, standings)).toBe(0.6);
      expect(getTeamShapePoints(manCity, standings)).toBe(0.4);
      expect(getTeamShapePoints(chelsea, standings)).toBe(0.467);
    });
  });
});
