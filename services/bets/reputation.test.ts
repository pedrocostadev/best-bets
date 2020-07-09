import { getTeamReputationPoints } from './reputation';
import { Team, Reputation } from '../../types';

describe('Reputation', () => {
  const manCity: Team = {
    teamId: 40,
    teamName: 'name not need, these methods use team Id',
    logo: 'https://media.api-sports.io/football/teams/50.png',
    venueName: 'Etihad Stadium',
    venueCapacity: 55097,
    country: 'England',
    founded: '1880',
  };

  const norwich: Team = {
    teamId: 71,
    teamName: 'name not need, these methods use team Id',
    logo: 'https://media.api-sports.io/football/teams/50.png',
    venueName: 'Etihad Stadium',
    venueCapacity: 55097,
    country: 'England',
    founded: '1880',
  };

  const westHam: Team = {
    teamId: 48,
    teamName: 'name not need, these methods use team Id',
    logo: 'https://media.api-sports.io/football/teams/50.png',
    venueName: 'Etihad Stadium',
    venueCapacity: 55097,
    country: 'England',
    founded: '1880',
  };

  const reputations: Reputation[] = [
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
  });
});
