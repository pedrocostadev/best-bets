export interface BestPlayer {
  name: string;
  teamName: string;
  place: number;
  currentTeam: string;
}

export interface BestFifaPlayersByYear {
  [year: string]: {
    players: BestPlayer[];
  };
}
