import { Config, FixtureWithBets } from '../../types';
import { getTeamReputationPoints, getTeamReputationValue } from './reputation';
import { getTeamRankingPoints } from './ranking';
import { getTeamShapePoints } from './shape';
import { getTeamExtraPoints, getTeamExtraPointsTags } from './extraPoints';
import { getConfindenceMargin } from './confidence';
import { round } from './utils';
import {
  TEAM_REPUTATION_WEIGHT,
  TEAM_STANDING_WEIGHT,
  TEAM_SHAPE_WEIGHT,
  HOME_WEIGHT,
} from './weights';
import { TeamReputation } from '../reputations/types';
import { Standing } from '../standings/types';
import fixturesService from '../fixtures';
import standingsService from '../standings';
import reputationsService from '../reputations';
import { BetDetail } from './types';
import { Team } from '../fixtures/types';

const getBestBet = (fixture: FixtureWithBets): string => {
  const drawMargin = getConfindenceMargin(fixture);

  if (fixture.homeTeamPoints > fixture.awayTeamPoints + drawMargin) {
    return `${fixture.homeTeam.teamName} wins!`;
  }

  if (fixture.awayTeamPoints > fixture.homeTeamPoints + drawMargin) {
    return `${fixture.awayTeam.teamName} wins!`;
  }
  return 'DRAW!';
};

const getBetDetail = (
  team: Team,
  reputations: TeamReputation[],
  standings: Standing[],
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
    extra: {
      value: getTeamExtraPointsTags(team, standings),
      points: getTeamExtraPoints(team, standings),
    },
  };
};

const getWeightedPoints = (teamBet: BetDetail, isHomeTeam?: boolean) =>
  round(
    teamBet.reputation.points * TEAM_REPUTATION_WEIGHT +
      teamBet.standing.points * TEAM_STANDING_WEIGHT +
      teamBet.shape.points * TEAM_SHAPE_WEIGHT +
      teamBet.extra.points +
      ((isHomeTeam && HOME_WEIGHT) || 0),
  );

const getBets = async (config: Config): Promise<FixtureWithBets[]> => {
  const { leagues: leaguesToGetBets } = config;
  const fixturesWithBets = [];

  for (const league of leaguesToGetBets) {
    // TODO: Use same interface for all services
    const [{ fixtures }] = await fixturesService.getFixtures([league]);

    const [{ standings }] = await standingsService.getStandings([league]);

    const [{ reputations }] = await reputationsService.getReputations({
      leaguesIds: [league.id],
      season: config.season,
    });

    const bets = fixtures.map((fixture) => {
      const { homeTeam, awayTeam } = fixture;

      const betDetails = {
        homeTeam: getBetDetail(homeTeam, reputations, standings),
        awayTeam: getBetDetail(awayTeam, reputations, standings),
      };

      return {
        ...fixture,
        betDetails,
        homeTeamPoints: getWeightedPoints(betDetails.homeTeam, true),
        awayTeamPoints: getWeightedPoints(betDetails.awayTeam),
      };
    });

    fixturesWithBets.push(bets);
  }

  return fixturesWithBets.flat();
};

export default {
  getBets,
  getBestBet,
};
