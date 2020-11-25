import { Bet } from './services/bets/types';
import { Fixture } from './services/fixtures/types';
import { LeagueStats } from './services/standings/types';

export interface ConfigLeague {
  id: number;
  rapidApiId: number;
  name: string;
  country: string;
}

export interface Config {
  appName: string;
  season: string;
  leagues: ConfigLeague[];
}

export interface TeamId {
  teamId: number;
  teamName: string;
  alias: string[];
}

export type Stats = LeagueStats;

export interface StatsByPlace {
  home: Stats;
  away: Stats;
}

export interface FixtureInfo {
  bet: Bet;
  fixture: Fixture;
  stats: {
    homeTeam: StatsByPlace;
    awayTeam: StatsByPlace;
  };
}
