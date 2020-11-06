import { ConfigLeague } from 'types.js';
import { LeagueReputation } from './types.js';

const getLeaguesReputations = async ({
  leagues,
  season,
}: {
  leagues: ConfigLeague[];
  season: string;
}): Promise<LeagueReputation[]> => {
  const filesPromises = leagues.map((league: ConfigLeague) =>
    getLeagueReputations({ league, season }),
  );

  const allLeaguesReputations = await Promise.all(filesPromises);

  return allLeaguesReputations;
};

const getLeagueReputations = async ({
  league,
  season,
}: {
  league: ConfigLeague;
  season: string;
}): Promise<LeagueReputation> => {
  const reputations = await require(`./data/${season}/league_${league.id}.json`);
  return reputations;
};

export default {
  getLeaguesReputations,
  getLeagueReputations,
};
