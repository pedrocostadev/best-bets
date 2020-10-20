export enum SpecialPointTypes {
  GOOD = 'good',
  BAD = 'bad',
}

export interface SpecialPoint {
  label: string;
  type: SpecialPointTypes;
}

export enum GameResult {
  WIN = 'W',
  DRAW = 'D',
  LOST = 'L',
}

export const SPECIAL_POINTS_TYPES = {
  oneOfBestDefenses: {
    label: 'oneOf3BestDefenses',
    type: SpecialPointTypes.GOOD,
  },
  oneOfBestAttacks: {
    label: 'oneOf3BestAttacks',
    type: SpecialPointTypes.GOOD,
  },
  oneOfWorstAttacks: {
    label: 'oneOf3WorstAttacks',
    type: SpecialPointTypes.BAD,
  },
  oneOfWorstDefenses: {
    label: 'oneOf3WorstDefenses',
    type: SpecialPointTypes.BAD,
  },
};

export interface BetItemDetail {
  points: number;
  value: number | string | string[] | SpecialPoint[];
}

export interface BetDetail {
  reputation: BetItemDetail;
  standing: BetItemDetail;
  shape: BetItemDetail;
  extra: BetItemDetail;
}

export interface Bet {
  homeTeamPoints: number;
  awayTeamPoints: number;
  betDetails: {
    homeTeam: BetDetail;
    awayTeam: BetDetail;
  };
}
