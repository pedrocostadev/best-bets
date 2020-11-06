import { Bet } from './services/bets/types';
import { Fixture } from './services/fixtures/types';

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

export type FixtureWithBets = Fixture & Bet;
