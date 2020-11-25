import bets from './bets';
import { FixtureInfo, Config } from '../../types';
import { LeagueReputation } from '../reputations/types';
import { LeagueStandings, Standing } from '../standings/types';
import { Fixture, LeagueFixtures } from '../fixtures/types';
import { GoalsDistinctionType } from './types';

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

const fixtures: Fixture[] = [
  {
    homeTeam: {
      teamId: 1,
      teamName: 'West Ham',
      logo: 'https://media.api-sports.io/football/teams/41.png',
    },
    awayTeam: {
      teamId: 50,
      teamName: 'Arsenal',
      logo: 'https://media.api-sports.io/football/teams/42.png',
    },
    venue: "St. Mary's Stadium",
    eventDate: '2020-06-25T17:00:00+00:00',
    leagueId: 524,
    fixtureId: 1,
  },
  {
    homeTeam: {
      teamId: 47,
      teamName: 'Chelsea',
      logo: 'https://media.api-sports.io/football/teams/49.png',
    },
    awayTeam: {
      teamId: 40,
      teamName: 'Manchester City',
      logo: 'https://media.api-sports.io/football/teams/50.png',
    },
    venue: 'Stamford Bridge',
    eventDate: '2020-06-25T19:15:00+00:00',
    leagueId: 524,
    fixtureId: 2,
  },
];

const getStandingsMockResult: LeagueStandings = { leagueId: 1, standings };
const getFixturesMockResult: LeagueFixtures = { leagueId: 1, fixtures };
const getReputationsMockResult: LeagueReputation = {
  id: 1,
  name: 'Premier League',
  country: 'England',
  season: '2020-21',
  reputations: [
    { teamId: 50, name: 'Arsenal', reputation: 5 },
    { teamId: 47, name: 'Chelsea', reputation: 3.5 },
    { teamId: 1, name: 'West Ham', reputation: 4 },
    { teamId: 40, name: 'Manchester City', reputation: 5 },
  ],
};

const configMock: Config = {
  appName: 'Best bets',
  season: '2020_21',
  leagues: [
    {
      id: 1,
      rapidApiId: 524,
      name: 'Premier League',
      country: 'England',
    },
  ],
};

jest.mock('../reputations', () => ({
  getLeagueReputations: () =>
    new Promise((resolutionFunc) => resolutionFunc(getReputationsMockResult)),
}));

jest.mock('../standings', () => ({
  getLeagueStandings: () =>
    new Promise((resolutionFunc) => resolutionFunc(getStandingsMockResult)),
}));

jest.mock('../fixtures', () => ({
  getLeagueFixtures: () =>
    new Promise((resolutionFunc) => resolutionFunc(getFixturesMockResult)),
}));

describe('Bets', () => {
  describe('getBets', () => {
    test('should return the right points for each team', async () => {
      const result = await bets.getLeaguesBets(configMock);
      const [game1, game2] = result;

      expect(game1.bet.homeTeam).toHaveProperty('points', 0.688);
      expect(game1.fixture.homeTeam).toHaveProperty('teamName', 'West Ham');
      expect(game1.bet.awayTeam).toHaveProperty('points', 0.827);
      expect(game1.fixture.awayTeam).toHaveProperty('teamName', 'Arsenal');

      expect(game2.bet.homeTeam).toHaveProperty('points', 0.694);
      expect(game2.fixture.homeTeam).toHaveProperty('teamName', 'Chelsea');
      expect(game2.bet.awayTeam).toHaveProperty('points', 0.777);
      expect(game2.fixture.awayTeam).toHaveProperty(
        'teamName',
        'Manchester City',
      );
    });
  });
  describe('getBets', () => {
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

    test('should return the right best bet', async () => {
      const fixture1 = {
        ...fixtureInfoMock,
        bet: {
          homeTeam: {
            ...fixtureInfoMock.bet.homeTeam,
            points: 0.802,
          },
          awayTeam: {
            ...fixtureInfoMock.bet.awayTeam,
            points: 0.498,
          },
        },
      };

      const fixture2 = {
        ...fixtureInfoMock,
        bet: {
          homeTeam: {
            ...fixtureInfoMock.bet.homeTeam,
            points: 0.802,
          },
          awayTeam: {
            ...fixtureInfoMock.bet.awayTeam,
            points: 0.804,
          },
        },
      };

      const fixture3 = {
        ...fixtureInfoMock,
        bet: {
          homeTeam: {
            ...fixtureInfoMock.bet.homeTeam,
            points: 0.802,
          },
          awayTeam: {
            ...fixtureInfoMock.bet.awayTeam,
            points: 1.498,
          },
        },
      };

      expect(bets.getBestBet(fixture1)).toBe('Leicester wins!');
      expect(bets.getBestBet(fixture2)).toBe('DRAW!');
      expect(bets.getBestBet(fixture3)).toBe('Brighton wins!');
    });
  });
});
