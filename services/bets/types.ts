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

export interface BetItemDetail<T> {
  points: number;
  value: T;
}

export interface BetDetail {
  reputation: BetItemDetail<number>;
  standing: BetItemDetail<number>;
  shape: BetItemDetail<string>;
  goalsDistinctions: BetItemDetail<GoalsDistinctionItem[]>;
  fifaBestWorldPlayers: BetItemDetail<string[][]>;
}

export interface Bet {
  homeTeam: {
    points: number;
    detail: BetDetail;
  };
  awayTeam: {
    points: number;
    detail: BetDetail;
  };
}
