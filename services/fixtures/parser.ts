import { Fixture } from './types';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const parseFixtures = ({ fixturesData, league }: any): Fixture[] => {
  const { fixtures } = fixturesData.data.api;
  const now = new Date();

  return fixtures
    .filter(({ event_date }) => now <= new Date(event_date))
    .map((fixture: any) => ({
      homeTeam: {
        teamId: fixture.homeTeam.team_id,
        teamName: fixture.homeTeam.team_name,
        logo: fixture.homeTeam.logo,
      },
      awayTeam: {
        teamId: fixture.awayTeam.team_id,
        teamName: fixture.awayTeam.team_name,
        logo: fixture.awayTeam.logo,
      },
      venue: fixture.venue,
      eventDate: fixture.event_date,
      leagueId: league.id,
      fixtureId: fixture.fixture_id,
    }));
};

export default { parseFixtures };
