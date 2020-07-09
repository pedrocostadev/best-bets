import bets from './bets';
import {
  isOneOfWorstAttacks,
  isOneOfWorstDefenses,
  isOneOfBestAttacks,
  isOneOfBestDefenses,
} from './extraPoints';

export default {
  isOneOfWorstAttacks,
  isOneOfWorstDefenses,
  isOneOfBestAttacks,
  isOneOfBestDefenses,
  ...bets,
};
