export interface TeamReputation {
  teamId: number;
  name: string;
  reputation: number;
}

export interface LeagueReputation {
  id: number;
  name: string;
  country: string;
  season: string;
  reputations: TeamReputation[];
}
