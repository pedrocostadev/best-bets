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
    label: 'one Of the 3 best defenses',
    type: GoalsDistinctionType.GOOD,
  },
  oneOfBestAttacks: {
    label: 'one of the 3 best attacks',
    type: GoalsDistinctionType.GOOD,
  },
  oneOfWorstAttacks: {
    label: 'one of the 3 worst attacks',
    type: GoalsDistinctionType.BAD,
  },
  oneOfWorstDefenses: {
    label: 'one of the 3 worst defenses',
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
