import {
  BestFifaPlayersByYear,
  BestFifaPlayer,
} from '../fifaBestPlayers/types';
import { Team } from '../fixtures/types';

const BEST_PLAYER_TEAM_POINTS = 0.05;

const getTeamBestFifaPlayers = (
  team: Team,
  bestPlayers: BestFifaPlayersByYear,
): BestFifaPlayer[] => {
  const allYears = Object.keys(bestPlayers);
  return allYears.flatMap((year: string) =>
    bestPlayers[year].players.filter(
      (player: BestFifaPlayer) =>
        !player.retired && player.awardTeamName === team.teamName,
    ),
  );
};

const getTeamBestFifaPlayersPoints = (
  team: Team,
  bestPlayers: BestFifaPlayersByYear,
): number => {
  const teamBestPlayers = getTeamBestFifaPlayers(team, bestPlayers);
  return teamBestPlayers.length * BEST_PLAYER_TEAM_POINTS;
};

const getTeamBestFifaPlayersNames = (
  team: Team,
  bestPlayers: BestFifaPlayersByYear,
): string[][] => {
  const allYears = Object.keys(bestPlayers);
  return allYears.flatMap((year: string) =>
    bestPlayers[year].players
      .filter(
        (player: BestFifaPlayer) =>
          !player.retired && player.awardTeamName === team.teamName,
      )
      .map((player: BestFifaPlayer) => [player.name, year]),
  );
};

export { getTeamBestFifaPlayersPoints, getTeamBestFifaPlayersNames };
