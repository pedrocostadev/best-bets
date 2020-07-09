import england from './data/england.json';
import { Reputation } from '../../types.js';

const getReputations = async ({
  leagueIds,
}: {
  leagueIds: number[];
}): Promise<Reputation[]> => {
  const leaguesReputations = [england];

  return leaguesReputations
    .filter((league) => leagueIds.includes(league.leagueId))
    .flatMap((league) => league.reputations);
};

export default {
  getReputations,
};
