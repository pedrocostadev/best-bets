import bets from './bets';
import {
  isOneOfWorstAttacks,
  isOneOfWorstDefenses,
  isOneOfBestAttacks,
  isOneOfBestDefenses,
} from './goalsDistinctions';

export default {
  isOneOfWorstAttacks,
  isOneOfWorstDefenses,
  isOneOfBestAttacks,
  isOneOfBestDefenses,
  ...bets,
};
