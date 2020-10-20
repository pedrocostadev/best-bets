import { Team } from '../fixtures/types';
import { Standing } from '../standings/types';
import { GameResult } from './types';
import { normalize } from './utils';
import { VICTORY_POINTS, DRAW_POINTS } from './weights';

const getNumberOfGameResults = (
  forme: string,
  resultType: GameResult,
): number =>
  forme &&
  forme
    .split('')
    .filter((gameResult) => gameResult.toUpperCase() === resultType).length;

const getNumberOfWins = (forme: string): number =>
  getNumberOfGameResults(forme, GameResult.WIN);

const getNumberOfDraws = (forme: string): number =>
  getNumberOfGameResults(forme, GameResult.DRAW);

const getShapePoints = (forme: string): number => {
  const numberOfWins = getNumberOfWins(forme);
  const numberOfDraws = getNumberOfDraws(forme);
  return numberOfWins * VICTORY_POINTS + numberOfDraws * DRAW_POINTS;
};

const getTeamShapePoints = (team: Team, standings: Standing[]): number => {
  const teamStanding = standings.find(
    (teamStanding) => teamStanding.teamName === team.teamName,
  );
  const formePoints = getShapePoints(teamStanding.forme);
  const maxFormePoints = VICTORY_POINTS * teamStanding.forme.length;
  const minFormePoints = 0;
  return normalize(formePoints, minFormePoints, maxFormePoints);
};

export { getShapePoints, getTeamShapePoints };
