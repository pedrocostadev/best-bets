export interface Player {
  name: string;
  currentTeam: string;
  retired: boolean;
}

export interface BestFifaPlayer extends Player {
  awardTeamName: string;
  place: number;
}

export interface BestFifaPlayersByYear {
  [year: string]: {
    players: BestFifaPlayer[];
  };
}
