import { Bet } from './services/bets/types';
import { Fixture } from './services/fixtures/types';

export interface ConfigLeague {
  id: number;
  rapidApiId: number;
  name: string;
  country: string;
}

export interface Config {
  season: string;
  leagues: ConfigLeague[];
}

export type FixtureWithBets = Fixture & Bet;
