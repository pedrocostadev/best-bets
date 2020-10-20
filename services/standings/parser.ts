/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LeagueStats, Standing } from './types';

const parseLeagueStats = (leagueStats: any): LeagueStats => ({
  matchsPlayed: leagueStats.matchsPlayed,
  win: leagueStats.win,
  draw: leagueStats.draw,
  lose: leagueStats.lose,
  goalsAgainst: leagueStats.goalsAgainst,
  goalsFor: leagueStats.goalsFor,
});

const parseStandings = ({ standingsData }: any): Standing[] => {
  const standings = standingsData.data.api.standings[0];
  return standings.map((standing: any) => ({
    teamId: standing.team_id,
    teamName: standing.teamName,
    rankInLeague: standing.rank,
    forme: standing.forme,
    leagueHomeStats: parseLeagueStats(standing.home),
    leagueAwayStats: parseLeagueStats(standing.away),
  }));
};

export default { parseStandings };
