export interface Team {
  teamId: number;
  teamName: string;
  logo: string;
}

export interface Fixture {
  homeTeam: Team;
  awayTeam: Team;
  venue: string;
  eventDate: string;
  leagueId: number;
  fixtureId: number;
}

export interface LeagueFixtures {
  leagueId: number;
  fixtures: Fixture[];
}
