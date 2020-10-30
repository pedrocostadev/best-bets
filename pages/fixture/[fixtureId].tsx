import React from 'react';
import { useRouter } from 'next/router';

import useBets from '../../hooks/useBets';
import FixtureDetail from '../../components/fixtureDetail/FixtureDetail';
import FixtureTeamsLogos from '../../components/fixtureTeamsLogos/FixtureTeamsLogos';
import Bet from '../../components/bet/Bet';

const getFixtureId = (query): number => parseInt(query.fixtureId);

const Fixture: React.FC = () => {
  const router = useRouter();
  const fixtureId = getFixtureId(router.query);
  const bets = useBets();
  const fixture = bets.fixtures.find(
    (fixture) => fixture.fixtureId === fixtureId,
  );
  return (
    <>
      {!fixture && <p>Not a valid fixture</p>}
      {fixture && (
        <>
          <FixtureTeamsLogos fixture={fixture} />
          <FixtureDetail fixture={fixture} />
          <Bet fixture={fixture} />
        </>
      )}
    </>
  );
};

export default Fixture;
