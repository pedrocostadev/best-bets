import { BestFifaPlayersByYear } from './types.js';

const getBestWorldFifaPlayers = async (): Promise<BestFifaPlayersByYear> => {
  const bestFifaPlayers = await require('./data/fifaWorldPlayers.json');
  return bestFifaPlayers.best3FifaPlayers;
};

export default {
  getBestWorldFifaPlayers,
};
