import {
  isOneOfBestAttacks,
  isOneOfBestDefenses,
  isOneOfWorstAttacks,
  isOneOfWorstDefenses,
  getTeamExtraPoints,
} from './extraPoints';
import { Standing } from '../../types';

/*
  goalsFor
  Man City: 56
  Arsenal: 71
  Chelsea: 45
  Leicester: 46
  West Ham: 47

  goalsAgainst
  Man City: 67
  Arsenal: 21
  Chelsea: 12
  West Ham: 96
  Leicester: 96

*/

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

describe('ExtraPoints', () => {
  describe('isOneOfBestAttacks', () => {
    test('should return true when the team have one of the best 3 attacks', () => {
      expect(isOneOfBestAttacks(arsenal, standings)).toBe(true);
    });
    test('should return false when the team does not have one of the best 3 attacks', () => {
      expect(isOneOfBestAttacks(chelsea, standings)).toBe(false);
    });
  });

  describe('isOneOfBestDefenses', () => {
    test('should return true when the team have one of the best 3 defenses', () => {
      expect(isOneOfBestDefenses(arsenal, standings)).toBe(true);
    });
    test('should return false when the team does not have one of the best 3 defenses', () => {
      expect(isOneOfBestDefenses(westHam, standings)).toBe(false);
    });
  });

  describe('isOneOfWorstAttacks', () => {
    test('should return true when the team have one of the 3 worst attacks', () => {
      expect(isOneOfWorstAttacks(chelsea, standings)).toBe(true);
    });
    test('should return false when the team does not have one of the 3 worst attacks', () => {
      expect(isOneOfWorstAttacks(arsenal, standings)).toBe(false);
    });
  });

  describe('isOneOfWorstDefenses', () => {
    test('should return true when the team have one of the 3 worst defenses', () => {
      expect(isOneOfWorstDefenses(manCity, standings)).toBe(true);
    });
    test('should return false when the team does not have one of the 3 worst defenses', () => {
      expect(isOneOfWorstDefenses(chelsea, standings)).toBe(false);
    });
  });

  describe('getTeamExtraPoints', () => {
    test('should return 0.1 for teams with one of the best attacks and one of the best defenses', () => {
      expect(getTeamExtraPoints(arsenal, standings)).toBe(0.1);
    });
    test('should return 0.05 for teams with one of the best attacks or one of the best defenses', () => {
      expect(getTeamExtraPoints(manCity, standings)).toBe(0.05);
    });
    test('should return -0.05 for teams with one of the worst attacks or one of the worst defenses', () => {
      expect(getTeamExtraPoints(westHam, standings)).toBe(-0.05);
    });
    test('should return 0 for teams with one of the worst attacks or one of the worst defenses and with one of the best attacks/defenses', () => {
      expect(getTeamExtraPoints(chelsea, standings)).toBe(0);
    });
  });
});
