import {
  BestFifaPlayersByYear,
  BestPlayer,
} from '../fifaBestWorldPlayers/types';
import { Team } from '../fixtures/types';

const BEST_PLAYER_TEAM_POINTS = 0.05;

const getTeamBestWorldPlayers = (
  team: Team,
  bestPlayers: BestFifaPlayersByYear,
): BestPlayer[] => {
  const allYears = Object.keys(bestPlayers);
  return allYears.flatMap((year: string) =>
    bestPlayers[year].players.filter(
      (player: BestPlayer) =>
        !player.retired && player.teamName === team.teamName,
    ),
  );
};

const getTeamBestWorldPlayersPoints = (
  team: Team,
  bestPlayers: BestFifaPlayersByYear,
): number => {
  const teamBestPlayers = getTeamBestWorldPlayers(team, bestPlayers);
  return teamBestPlayers.length * BEST_PLAYER_TEAM_POINTS;
};

const getTeamBestWorldPlayersNames = (
  team: Team,
  bestPlayers: BestFifaPlayersByYear,
): string[][] => {
  const allYears = Object.keys(bestPlayers);
  return allYears.flatMap((year: string) =>
    bestPlayers[year].players
      .filter(
        (player: BestPlayer) =>
          !player.retired && player.teamName === team.teamName,
      )
      .map((player: BestPlayer) => [player.name, year]),
  );
};

export { getTeamBestWorldPlayersPoints, getTeamBestWorldPlayersNames };
