import { BestFifaPlayersByYear } from './types.js';
import bestFifaPlayers from './data/fifaWorldPlayers.json';

const getBestFifaPlayers = async (): Promise<BestFifaPlayersByYear> =>
  bestFifaPlayers.best3FifaPlayers;

export default {
  getBestFifaPlayers,
};
