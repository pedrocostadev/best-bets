/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fixture, Team, LeagueStats, Standing } from '../../types';

const parseFixtures = ({ fixtures }: any): Fixture[] =>
  fixtures.map((fixture: any) => ({
    homeTeam: {
      teamId: fixture.homeTeam.team_id,
      teamName: fixture.homeTeam.team_name,
      logo: fixture.homeTeam.logo,
    },
    awayTeam: {
      teamId: fixture.awayTeam.team_id,
      teamName: fixture.awayTeam.team_name,
      logo: fixture.awayTeam.logo,
    },
    venue: fixture.venue,
    eventDate: fixture.event_date,
    leagueId: fixture.league_id,
  }));

const parseLeagueStats = (leagueStats: any): LeagueStats => ({
  matchsPlayed: leagueStats.matchsPlayed,
  win: leagueStats.win,
  draw: leagueStats.draw,
  lose: leagueStats.lose,
  goalsAgainst: leagueStats.goalsAgainst,
  goalsFor: leagueStats.goalsFor,
});

const parseStandings = (standings: any): Standing[] =>
  standings.map((standing: any) => ({
    teamId: standing.team_id,
    teamName: standing.teamName,
    rankInLeague: standing.rank,
    forme: standing.forme,
    leagueHomeStats: parseLeagueStats(standing.home),
    leagueAwayStats: parseLeagueStats(standing.away),
  }));

const parseTeams = ({ teams }: any): Team[] =>
  teams.map((team: any) => ({
    teamId: team.team_id,
    teamName: team.name,
    logo: team.logo,
    venueName: team.venue_name,
    venueCapacity: team.venue_capacity,
    country: team.country,
    founded: team.founded,
  }));

export default {
  parseFixtures,
  parseStandings,
  parseTeams,
};
