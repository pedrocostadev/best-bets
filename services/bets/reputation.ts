import { Team } from '../fixtures/types';
import { TeamReputation } from '../reputations/types';
import { normalize } from './utils';

const TEAM_REPUTATIONS_MIN = 0.5;
const TEAM_REPUTATIONS_MAX = 5;

const getTeamReputationValue = (
  team: Team,
  reputations: TeamReputation[],
): number => {
  const reputation = reputations.find(
    (reputation) => reputation.name === team.teamName,
  );
  if (!reputation) {
    console.error('No reputation found for team', team.teamName);
    return 0;
  }
  return reputation.reputation;
};

const getTeamReputationPoints = (
  team: Team,
  reputations: TeamReputation[],
): number => {
  const teamReputation = getTeamReputationValue(team, reputations);
  return normalize(teamReputation, TEAM_REPUTATIONS_MIN, TEAM_REPUTATIONS_MAX);
};

export { getTeamReputationPoints, getTeamReputationValue };
