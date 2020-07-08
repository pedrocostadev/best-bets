import { Team, Reputation } from '../../types';
import { normalize } from './utils';

const getTeamReputationPoints = (
  team: Team,
  reputations: Reputation[],
): number => {
  const teamRating = reputations.find((rating) => rating.teamId === team.teamId)
    .reputation;
  const teamReputationsMin = 0.5;
  const teamReputationsMax = 5;
  return normalize(teamRating, teamReputationsMin, teamReputationsMax);
};

export { getTeamReputationPoints };
