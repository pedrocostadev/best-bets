import { FixtureInfo } from 'types';
import { getConfindenceMargin } from './confidence';
import { GoalsDistinctionType } from './types';

const mockStats = {
  matchsPlayed: 0,
  win: 0,
  draw: 0,
  lose: 0,
  goalsAgainst: 0,
  goalsFor: 0,
};

const fixtureInfoMock: FixtureInfo = {
  fixture: {
    homeTeam: {
      teamId: 46,
      teamName: 'Leicester',
      logo: 'https://media.api-sports.io/football/teams/46.png',
    },
    awayTeam: {
      teamId: 51,
      teamName: 'Brighton',
      logo: 'https://media.api-sports.io/football/teams/51.png',
    },
    venue: 'King Power Stadium',
    eventDate: '2020-06-23T17:00:00+00:00',
    leagueId: 524,
    fixtureId: 1,
  },
  bet: {
    homeTeam: {
      points: 0.802,
      detail: {
        reputation: { value: 4.5, points: 0.889 },
        standing: { value: 3, points: 0.6 },
        shape: { value: 'DWLLD', points: 0.333 },
        goalsDistinctions: {
          value: [
            { label: 'oneOf3BestAttacks', type: GoalsDistinctionType.GOOD },
            {
              label: 'oneOf3BestDefenses',
              type: GoalsDistinctionType.GOOD,
            },
          ],
          points: 0.1,
        },
        fifaBestWorldPlayers: { value: undefined, points: 0 },
      },
    },
    awayTeam: {
      points: 0.498,
      detail: {
        reputation: { value: 4, points: 0.778 },
        standing: { value: 15, points: 0.356 },
        shape: { value: 'WDLDD', points: 0.4 },
        goalsDistinctions: { value: [], points: 0 },
        fifaBestWorldPlayers: { value: undefined, points: 0 },
      },
    },
  },
  stats: {
    homeTeam: {
      home: mockStats,
      away: mockStats,
    },
    awayTeam: {
      home: mockStats,
      away: mockStats,
    },
  },
};

describe('Confidence interval', () => {
  describe('getConfindenceMargin', () => {
    test('should return the right confidence value', () => {
      const expectedResult = 0.1203;
      expect(getConfindenceMargin(fixtureInfoMock)).toEqual(expectedResult);
    });
  });
});
