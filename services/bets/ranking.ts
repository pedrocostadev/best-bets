import { Team, Standing, LeagueStats } from '../../types';
import { normalize } from './utils';
import { VICTORY_POINTS, DRAW_POINTS } from './weights';

const getStatsPoints = (stats: LeagueStats) =>
  stats.win * VICTORY_POINTS + stats.draw * DRAW_POINTS;

const getTeamRankingPoints = (team: Team, standings: Standing[]): number => {
  const teamStanding = standings.find(
    (teamStanding) => teamStanding.teamId === team.teamId,
  );

  const { leagueHomeStats, leagueAwayStats } = teamStanding;

  const rankingPoints =
    getStatsPoints(leagueHomeStats) + getStatsPoints(leagueAwayStats);

  const maxRankingPoints =
    (teamStanding.leagueAwayStats.matchsPlayed +
      teamStanding.leagueHomeStats.matchsPlayed) *
    VICTORY_POINTS;
  const minRankingPoints = 0;
  return normalize(rankingPoints, minRankingPoints, maxRankingPoints);
};

export { getTeamRankingPoints };
