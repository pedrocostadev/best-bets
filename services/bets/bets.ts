import { FixtureWithBets } from '../../types';
import rapidApi from '../rapidApi';
import reputationsApi from '../reputationsApi';
import { getTeamReputationPoints } from './reputation';
import { getTeamRankingPoints } from './ranking';
import { getTeamShapePoints } from './shape';
import { getTeamExtraPoints, getTeamExtraPointsTags } from './extraPoints';
import { round } from './utils';
import {
  TEAM_RATING_WEIGHT,
  TEAM_STANDING_WEIGHT,
  TEAM_FORME_WEIGHT,
  HOME_WEIGHT,
  CONFIDENCE_MARGIN,
} from './weights';

const getBestBet = (fixture: FixtureWithBets): string => {
  if (fixture.homeTeamPoints > fixture.awayTeamPoints + CONFIDENCE_MARGIN) {
    return `${fixture.homeTeam.teamName} wins!`;
  }

  if (fixture.awayTeamPoints > fixture.homeTeamPoints + CONFIDENCE_MARGIN) {
    return `${fixture.awayTeam.teamName} wins!`;
  }
  return 'DRAW!';
};

const getBets = async ({
  leagueIds,
}: {
  leagueIds: number[];
}): Promise<FixtureWithBets[]> => {
  const { nextFixtures, standings } = await rapidApi.getLeagues({
    leagueIds,
  });

  const reputations = await reputationsApi.getReputations();

  return nextFixtures.map((fixture) => {
    const { homeTeam, awayTeam } = fixture;

    const homeTeamReputationPoints = getTeamReputationPoints(
      homeTeam,
      reputations,
    );
    const awayTeamReputationPoints = getTeamReputationPoints(
      awayTeam,
      reputations,
    );
    const homeTeamStandingPoints = getTeamRankingPoints(homeTeam, standings);
    const awayTeamStandingPoints = getTeamRankingPoints(awayTeam, standings);
    const homeTeamShapePoints = getTeamShapePoints(homeTeam, standings);
    const awayTeamShapePoints = getTeamShapePoints(awayTeam, standings);
    const homeTeamExtraPoints = getTeamExtraPoints(homeTeam, standings);
    const awayTeamExtraPoints = getTeamExtraPoints(awayTeam, standings);

    const homeTeamStanding = standings.find(
      (standing) => standing.teamId === homeTeam.teamId,
    );

    const awayTeamStanding = standings.find(
      (standing) => standing.teamId === awayTeam.teamId,
    );

    return {
      ...fixture,
      homeTeamPoints: round(
        homeTeamReputationPoints * TEAM_RATING_WEIGHT +
          homeTeamStandingPoints * TEAM_STANDING_WEIGHT +
          homeTeamShapePoints * TEAM_FORME_WEIGHT +
          homeTeamExtraPoints +
          HOME_WEIGHT,
      ),
      awayTeamPoints: round(
        awayTeamReputationPoints * TEAM_RATING_WEIGHT +
          awayTeamStandingPoints * TEAM_STANDING_WEIGHT +
          awayTeamShapePoints * TEAM_FORME_WEIGHT +
          awayTeamExtraPoints,
      ),
      betDetails: {
        homeTeam: {
          reputation: {
            value: reputations.find(
              (rating) => rating.teamId === homeTeam.teamId,
            ).reputation,
            points: homeTeamReputationPoints,
          },
          standing: {
            value: homeTeamStanding.rankInLeague,
            points: homeTeamStandingPoints,
          },
          shape: {
            value: homeTeamStanding.forme,
            points: homeTeamShapePoints,
          },
          extra: {
            value: getTeamExtraPointsTags(homeTeam, standings),
            points: homeTeamExtraPoints,
          },
        },
        awayTeam: {
          reputation: {
            value: reputations.find(
              (rating) => rating.teamId === awayTeam.teamId,
            ).reputation,
            points: awayTeamReputationPoints,
          },
          standing: {
            value: awayTeamStanding.rankInLeague,
            points: awayTeamStandingPoints,
          },
          shape: {
            value: awayTeamStanding.forme,
            points: awayTeamShapePoints,
          },
          extra: {
            value: getTeamExtraPointsTags(awayTeam, standings),
            points: awayTeamExtraPoints,
          },
        },
      },
    };
  });
};

export default {
  getBets,
  getBestBet,
};
