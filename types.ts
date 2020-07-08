export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
}

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

export interface Team {
  teamId: number;
  teamName: string;
  logo: string;
  venueName: string;
  venueCapacity: number;
  country: string;
  founded: string;
}

export interface Fixture {
  homeTeam: Team;
  awayTeam: Team;
  venue: string;
  eventDate: string;
  leagueId: number;
}

export interface Config {
  leagues: number[];
}

export interface Reputation {
  teamId: number;
  name: string;
  reputation: number;
}

export interface LeagueData {
  nextFixtures: Fixture[];
  teams: Team[];
  standings: Standing[];
}

export enum SpecialPointTypes {
  GOOD = 'good',
  BAD = 'bad',
}

export interface SpecialPoint {
  label: string;
  type: SpecialPointTypes;
}

export enum GameResult {
  WIN = 'W',
  DRAW = 'D',
  LOST = 'L',
}

export const SPECIAL_POINTS_TYPES = {
  oneOfBestDefenses: {
    label: 'oneOf3BestDefenses',
    type: SpecialPointTypes.GOOD,
  },
  oneOfBestAttacks: {
    label: 'oneOf3BestAttacks',
    type: SpecialPointTypes.GOOD,
  },
  oneOfWorstAttacks: {
    label: 'oneOf3WorstAttacks',
    type: SpecialPointTypes.BAD,
  },
  oneOfWorstDefenses: {
    label: 'oneOf3WorstDefenses',
    type: SpecialPointTypes.BAD,
  },
};

export interface BetItemDetail {
  points: number;
  value: number | string | string[] | SpecialPoint[];
}

export interface BetDetail {
  reputation: BetItemDetail;
  standing: BetItemDetail;
  shape: BetItemDetail;
  extra: BetItemDetail;
}

export interface Bet {
  homeTeamPoints: number;
  awayTeamPoints: number;
  betDetails: {
    homeTeam: BetDetail;
    awayTeam: BetDetail;
  };
}

export type FixtureWithBets = Fixture & Bet;
