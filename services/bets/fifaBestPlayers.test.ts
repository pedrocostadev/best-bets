import { BestFifaPlayersByYear } from '../fifaBestPlayers/types';
import { Team } from '../fixtures/types';
import {
  getTeamBestFifaPlayersNames,
  getTeamBestFifaPlayersPoints,
} from './fifaBestPlayers';

const liverpool: Team = {
  teamId: 40,
  teamName: 'Liverpool',
  logo: 'https://media.api-sports.io/football/teams/50.png',
};

const westHam: Team = {
  teamId: 48,
  teamName: 'West Ham',
  logo: 'https://media.api-sports.io/football/teams/50.png',
};

const bestPlayers: BestFifaPlayersByYear = {
  '2019': {
    players: [
      {
        name: 'Lionel Messi',
        awardTeamName: 'Barcelona',
        place: 1,
        currentTeam: 'Barcelona',
        retired: false,
      },
      {
        name: 'Virgil van Dijk',
        awardTeamName: 'Liverpool',
        place: 2,
        currentTeam: 'Liverpool',
        retired: false,
      },
      {
        name: 'Cristiano Ronaldo',
        awardTeamName: 'Juventus',
        place: 3,
        currentTeam: 'Juventus',
        retired: false,
      },
    ],
  },
  '2018': {
    players: [
      {
        name: 'Luka Modrić',
        awardTeamName: 'Real Madrid',
        place: 1,
        currentTeam: 'Real Madrid',
        retired: false,
      },
      {
        name: 'Cristiano Ronaldo',
        awardTeamName: 'Juventus',
        place: 2,
        currentTeam: 'Juventus',
        retired: false,
      },
      {
        name: 'Mohamed Salah',
        awardTeamName: 'Liverpool',
        place: 3,
        currentTeam: 'Liverpool',
        retired: false,
      },
    ],
  },
};

describe('Fifa Best Players', () => {
  describe('getTeamBestFifaPlayersPoints', () => {
    test('should return the right fifa best player points', () => {
      const expectedResult = 0.1;
      expect(getTeamBestFifaPlayersPoints(liverpool, bestPlayers)).toBe(
        expectedResult,
      );
    });

    test('should return 0 when the team has no fifa best players', () => {
      const expectedResult = 0;
      expect(getTeamBestFifaPlayersPoints(westHam, bestPlayers)).toBe(
        expectedResult,
      );
    });
  });
  describe('getTeamBestFifaPlayersPoints', () => {
    test('should return the right fifa best player names and years', () => {
      const expectedResult = [
        ['Mohamed Salah', '2018'],
        ['Virgil van Dijk', '2019'],
      ];
      expect(getTeamBestFifaPlayersNames(liverpool, bestPlayers)).toEqual(
        expectedResult,
      );
    });

    test('should return an empty array when the team has no fifa best players', () => {
      const expectedResult = [];
      expect(getTeamBestFifaPlayersNames(westHam, bestPlayers)).toEqual(
        expectedResult,
      );
    });
  });
});
