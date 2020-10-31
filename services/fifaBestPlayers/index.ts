import { BestFifaPlayersByYear } from './types.js';
import bestFifaPlayers from './data/fifaWorldPlayers.json';

const getBestWorldFifaPlayers = async (): Promise<BestFifaPlayersByYear> =>
  bestFifaPlayers.best3FifaPlayers;

export default {
  getBestWorldFifaPlayers,
};
