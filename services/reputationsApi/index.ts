import england from './data/england.json';
import { Reputation } from '../../types.js';

const getReputations = async (): Promise<Reputation[]> => {
  return england.reputations;
};

export default {
  getReputations,
};
