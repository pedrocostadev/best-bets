export interface LeagueStats {
  matchsPlayed: number;
  win: number;
  draw: number;
  lose: number;
  goalsAgainst: number;
  goalsFor: number;
}

export interface Standing {
  teamId: number;
  teamName: string;
  rankInLeague: number;
  forme: string;
  leagueHomeStats: LeagueStats;
  leagueAwayStats: LeagueStats;
}

export interface LeagueStandings {
  leagueId: number;
  standings: Standing[];
}
