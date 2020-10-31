export enum GameResult {
  WIN = 'W',
  DRAW = 'D',
  LOST = 'L',
}

export enum GoalsDistinctionType {
  GOOD = 'good',
  BAD = 'bad',
}

export interface GoalsDistinctionItem {
  label: string;
  type: GoalsDistinctionType;
}

export const GOALS_DISTINCTION_TYPES = {
  oneOfBestDefenses: {
    label: 'oneOfThe3BestDefenses',
    type: GoalsDistinctionType.GOOD,
  },
  oneOfBestAttacks: {
    label: 'oneOfThe3BestAttacks',
    type: GoalsDistinctionType.GOOD,
  },
  oneOfWorstAttacks: {
    label: 'oneOfThe3WorstAttacks',
    type: GoalsDistinctionType.BAD,
  },
  oneOfWorstDefenses: {
    label: 'oneOfThe3WorstDefenses',
    type: GoalsDistinctionType.BAD,
  },
};

export interface BetItemDetail {
  points: number;
  value: number | string | string[] | GoalsDistinctionItem[] | string[][]; // TODO: Check better approach
}

export interface BetDetail {
  reputation: BetItemDetail;
  standing: BetItemDetail;
  shape: BetItemDetail;
  goalsDistinctions: BetItemDetail;
  fifaBestWorldPlayers: BetItemDetail;
}

export interface Bet {
  homeTeamPoints: number;
  awayTeamPoints: number;
  betDetails: {
    homeTeam: BetDetail;
    awayTeam: BetDetail;
  };
}
