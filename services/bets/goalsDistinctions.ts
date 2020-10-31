import { Team } from '../fixtures/types';
import { Standing } from '../standings/types';
import { GoalsDistinctionItem, GOALS_DISTINCTION_TYPES } from './types';

const getCompareFn = (compareField: string) => (a: Standing, b: Standing) => {
  const numberOfGoalsForA =
    a.leagueAwayStats[compareField] + a.leagueHomeStats[compareField];
  const numberOfGoalsForB =
    b.leagueAwayStats[compareField] + b.leagueHomeStats[compareField];
  if (numberOfGoalsForA > numberOfGoalsForB) {
    return -1;
  }
  if (numberOfGoalsForA < numberOfGoalsForB) {
    return 1;
  }
  return 0;
};

const compareByGoalsAgainst = (a: Standing, b: Standing) =>
  getCompareFn('goalsAgainst')(a, b);

const compareByGoalsFor = (a: Standing, b: Standing) =>
  getCompareFn('goalsFor')(a, b);

const TOP = 3;

const getLastFn = (
  last: number,
  compareFn: (a: Standing, b: Standing) => number,
) => (standings: Standing[]) => {
  return standings
    .sort(compareFn)
    .slice(standings.length - last, standings.length);
};

const getFirstFn = (
  last: number,
  compareFn: (a: Standing, b: Standing) => number,
) => (standings: Standing[]) => {
  return standings.sort(compareFn).slice(0, last);
};

const isOneOfBestDefenses = (team: Team, standings: Standing[]): boolean => {
  const getLast = getLastFn(TOP, compareByGoalsAgainst);
  return getLast(standings).some(
    (standing) => standing.teamName === team.teamName,
  );
};

const isOneOfBestAttacks = (team: Team, standings: Standing[]): boolean => {
  const getFirst = getFirstFn(TOP, compareByGoalsFor);
  return getFirst(standings).some(
    (standing) => standing.teamName === team.teamName,
  );
};

const isOneOfWorstDefenses = (team: Team, standings: Standing[]): boolean => {
  const getFirst = getFirstFn(TOP, compareByGoalsAgainst);
  return getFirst(standings).some(
    (standing) => standing.teamName === team.teamName,
  );
};

const isOneOfWorstAttacks = (team: Team, standings: Standing[]): boolean => {
  const getLast = getLastFn(TOP, compareByGoalsFor);
  return getLast(standings).some(
    (standing) => standing.teamName === team.teamName,
  );
};

const GOALS_DISTINCTION_POINTS = 0.05;

const getTeamGoalsDistinctionsPoints = (
  team: Team,
  standings: Standing[],
): number => {
  let extraPoints = 0;

  const oneOfBestDefenses = isOneOfBestDefenses(team, standings);
  const oneOfBestAttacks = isOneOfBestAttacks(team, standings);
  const oneOfWorstDefenses = isOneOfWorstDefenses(team, standings);
  const oneOfWorstAttacks = isOneOfWorstAttacks(team, standings);

  if (oneOfBestDefenses) {
    extraPoints += GOALS_DISTINCTION_POINTS;
  }

  if (oneOfBestAttacks) {
    extraPoints += GOALS_DISTINCTION_POINTS;
  }

  if (oneOfWorstDefenses) {
    extraPoints -= GOALS_DISTINCTION_POINTS;
  }

  if (oneOfWorstAttacks) {
    extraPoints -= GOALS_DISTINCTION_POINTS;
  }

  return extraPoints;
};

const getTeamGoalsDistinctions = (
  team: Team,
  standings: Standing[],
): GoalsDistinctionItem[] => {
  const tags = [];
  if (isOneOfBestAttacks(team, standings)) {
    tags.push(GOALS_DISTINCTION_TYPES.oneOfBestAttacks);
  }
  if (isOneOfBestDefenses(team, standings)) {
    tags.push(GOALS_DISTINCTION_TYPES.oneOfBestDefenses);
  }
  if (isOneOfWorstAttacks(team, standings)) {
    tags.push(GOALS_DISTINCTION_TYPES.oneOfWorstAttacks);
  }
  if (isOneOfWorstDefenses(team, standings)) {
    tags.push(GOALS_DISTINCTION_TYPES.oneOfWorstDefenses);
  }
  return tags;
};

export {
  getTeamGoalsDistinctions,
  getTeamGoalsDistinctionsPoints,
  isOneOfBestDefenses,
  isOneOfBestAttacks,
  isOneOfWorstDefenses,
  isOneOfWorstAttacks,
};
