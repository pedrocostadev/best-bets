export interface BestPlayer {
  name: string;
  teamName: string;
  place: number;
  currentTeam: string;
  retired: boolean;
}

export interface BestFifaPlayersByYear {
  [year: string]: {
    players: BestPlayer[];
  };
}
