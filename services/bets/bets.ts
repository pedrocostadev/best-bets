import { Config, ConfigLeague, FixtureInfo } from '../../types';
import { getTeamReputationPoints, getTeamReputationValue } from './reputation';
import { getTeamRankingPoints } from './ranking';
import { getTeamShapePoints } from './shape';
import {
  getTeamGoalsDistinctionsPoints,
  getTeamGoalsDistinctions,
} from './goalsDistinctions';
import { getConfindenceMargin } from './confidence';
import {
  getTeamBestFifaPlayersPoints,
  getTeamBestFifaPlayersNames,
} from './fifaBestPlayers';
import { round } from './utils';
import {
  TEAM_REPUTATION_WEIGHT,
  TEAM_STANDING_WEIGHT,
  TEAM_SHAPE_WEIGHT,
  HOME_WEIGHT,
} from './weights';
import { TeamReputation } from '../reputations/types';
import { Standing } from '../standings/types';
import { BetDetail } from './types';
import { Team } from '../fixtures/types';
import fixturesService from '../fixtures';
import standingsService from '../standings';
import reputationsService from '../reputations';
import fifaBestWorldPlayersService from '../fifaBestPlayers';
import { BestFifaPlayersByYear } from '../fifaBestPlayers/types';

const getBestBet = (fixtureInfo: FixtureInfo): string => {
  const drawMargin = getConfindenceMargin(fixtureInfo);
  const {
    bet: { homeTeam, awayTeam },
    fixture,
  } = fixtureInfo;

  if (homeTeam.points > awayTeam.points + drawMargin) {
    return `${fixture.homeTeam.teamName} wins!`;
  }

  if (awayTeam.points > homeTeam.points + drawMargin) {
    return `${fixture.awayTeam.teamName} wins!`;
  }
  return 'DRAW!';
};

const getBetDetail = (
  team: Team,
  reputations: TeamReputation[],
  standings: Standing[],
  fifaBestWorldPlayers: BestFifaPlayersByYear,
): BetDetail => {
  const teamStanding = standings.find(
    (standing) => standing.teamName === team.teamName,
  );

  if (!teamStanding) {
    throw new Error('No team standing found');
  }

  return {
    reputation: {
      value: getTeamReputationValue(team, reputations),
      points: getTeamReputationPoints(team, reputations),
    },
    standing: {
      value: teamStanding.rankInLeague,
      points: getTeamRankingPoints(team, standings),
    },
    shape: {
      value: teamStanding.forme,
      points: getTeamShapePoints(team, standings),
    },
    goalsDistinctions: {
      value: getTeamGoalsDistinctions(team, standings),
      points: getTeamGoalsDistinctionsPoints(team, standings),
    },
    fifaBestWorldPlayers: {
      value: getTeamBestFifaPlayersNames(team, fifaBestWorldPlayers),
      points: getTeamBestFifaPlayersPoints(team, fifaBestWorldPlayers),
    },
  };
};

const getWeightedPoints = (teamBet: BetDetail, isHomeTeam?: boolean) =>
  round(
    teamBet.reputation.points * TEAM_REPUTATION_WEIGHT +
      teamBet.standing.points * TEAM_STANDING_WEIGHT +
      teamBet.shape.points * TEAM_SHAPE_WEIGHT +
      teamBet.goalsDistinctions.points +
      ((isHomeTeam && HOME_WEIGHT) || 0) +
      teamBet.fifaBestWorldPlayers.points,
  );

const getLeaguesBets = async (config: Config): Promise<FixtureInfo[]> => {
  const { leagues: leaguesToGetBets } = config;
  const fixturesWithBets = [];

  for (const league of leaguesToGetBets) {
    const { fixtures } = await fixturesService.getLeagueFixtures(league);

    const { standings } = await standingsService.getLeagueStandings(league);

    const { reputations } = await reputationsService.getLeagueReputations({
      league,
      season: config.season,
    });

    const fifaBestWorldPlayers = await fifaBestWorldPlayersService.getBestWorldFifaPlayers();

    const bets = fixtures.map((fixture) => {
      const { homeTeam, awayTeam } = fixture;

      const homeTeamStandings = standings.find(
        (standing) => standing.teamName === homeTeam.teamName,
      );
      const awayTeamStandings = standings.find(
        (standing) => standing.teamName === awayTeam.teamName,
      );

      const [homeTeamBetDetails, awayTeamBetDetails] = [
        homeTeam,
        awayTeam,
      ].map((team) =>
        getBetDetail(team, reputations, standings, fifaBestWorldPlayers),
      );

      return {
        fixture,
        bet: {
          homeTeam: {
            points: getWeightedPoints(homeTeamBetDetails, true),
            detail: homeTeamBetDetails,
          },
          awayTeam: {
            points: getWeightedPoints(awayTeamBetDetails),
            detail: awayTeamBetDetails,
          },
        },
        stats: {
          homeTeam: {
            home: homeTeamStandings.leagueHomeStats,
            away: homeTeamStandings.leagueAwayStats,
          },
          awayTeam: {
            home: awayTeamStandings.leagueHomeStats,
            away: awayTeamStandings.leagueAwayStats,
          },
        },
      };
    });

    fixturesWithBets.push(bets);
  }

  return fixturesWithBets.flat();
};

const getFixtureBet = async (
  league: ConfigLeague,
  season: string,
  fixtureId: number,
): Promise<FixtureInfo> => {
  const fixture = await fixturesService.getLeagueFixture(league, fixtureId);

  const { standings } = await standingsService.getLeagueStandings(league);

  const { reputations } = await reputationsService.getLeagueReputations({
    league,
    season,
  });

  const fifaBestWorldPlayers = await fifaBestWorldPlayersService.getBestWorldFifaPlayers();

  const { homeTeam, awayTeam } = fixture;

  const [homeTeamBetDetailss, awayTeamBetDetails] = [
    homeTeam,
    awayTeam,
  ].map((team) =>
    getBetDetail(team, reputations, standings, fifaBestWorldPlayers),
  );

  const homeTeamStandings = standings.find(
    (standing) => standing.teamName === homeTeam.teamName,
  );
  const awayTeamStandings = standings.find(
    (standing) => standing.teamName === awayTeam.teamName,
  );

  return {
    bet: {
      homeTeam: {
        points: getWeightedPoints(homeTeamBetDetailss, true),
        detail: homeTeamBetDetailss,
      },
      awayTeam: {
        points: getWeightedPoints(awayTeamBetDetails),
        detail: awayTeamBetDetails,
      },
    },
    fixture: fixture,
    stats: {
      homeTeam: {
        home: homeTeamStandings.leagueHomeStats,
        away: homeTeamStandings.leagueAwayStats,
      },
      awayTeam: {
        home: awayTeamStandings.leagueHomeStats,
        away: awayTeamStandings.leagueAwayStats,
      },
    },
  };
};

export default {
  getFixtureBet,
  getLeaguesBets,
  getBestBet,
};
