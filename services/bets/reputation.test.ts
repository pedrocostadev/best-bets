import { getTeamReputationPoints, getTeamReputationValue } from './reputation';
import { TeamReputation } from '../reputations/types';
import { Team } from '../fixtures/types';

describe('Reputation', () => {
  const manCity: Team = {
    teamId: 40,
    teamName: 'Man City',
    logo: 'https://media.api-sports.io/football/teams/50.png',
  };

  const norwich: Team = {
    teamId: 71,
    teamName: 'Norwich',
    logo: 'https://media.api-sports.io/football/teams/50.png',
  };

  const westHam: Team = {
    teamId: 48,
    teamName: 'West Ham',
    logo: 'https://media.api-sports.io/football/teams/50.png',
  };

  const reputations: TeamReputation[] = [
    { teamId: 40, name: 'Man City', reputation: 5 },
    { teamId: 71, name: 'Norwich', reputation: 3.5 },
    { teamId: 48, name: 'West Ham', reputation: 4 },
  ];

  describe('getTeamReputationPoints', () => {
    test('should return the right reputation points', () => {
      expect(getTeamReputationPoints(manCity, reputations)).toBe(1);
      expect(getTeamReputationPoints(norwich, reputations)).toBe(0.667);
      expect(getTeamReputationPoints(westHam, reputations)).toBe(0.778);
    });

    test('should return the right reputation value', () => {
      expect(getTeamReputationValue(manCity, reputations)).toBe(5);
    });
  });
});
