import { LeagueReputation } from '../../types.js';

const getReputations = async ({
  leaguesIds,
  season,
}: {
  leaguesIds: number[];
  season: string;
}): Promise<LeagueReputation[]> => {
  const filesPromises = leaguesIds.map((leagueId: number) =>
    require(`./data/${season}/league_${leagueId}.json`),
  );

  const allLeaguesReputations = await Promise.all(filesPromises);

  return allLeaguesReputations;
};

export default {
  getReputations,
};
