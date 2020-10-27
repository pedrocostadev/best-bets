import React from 'react';

import useBets from '../../hooks/useBets';
import IconSadFace from '../../Icons/IconSadFace';
import { FixtureWithBets } from '../../types';
import FixtureListItem from './components/fixtureListItem/FixtureListItem';
import Message from '../message/Message';

const FixturesList: React.FC = () => {
  const { fixtures } = useBets();
  const noFixtures = !fixtures || fixtures.length === 0;

  if (noFixtures) {
    return <Message text="No games available" Icon={IconSadFace} />;
  }

  return (
    <>
      {fixtures.map((fixture: FixtureWithBets) => (
        <FixtureListItem key={fixture.fixtureId} fixture={fixture} />
      ))}
    </>
  );
};

export default React.memo(FixturesList);
