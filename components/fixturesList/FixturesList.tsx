import React from 'react';

import useBets from '@/hooks/useBets';
import Text from '@/components/text/Text';
import FlexContainer from '@/components/flexContainer/FlexContainer';
import IconSadFace from '@/svgs/IconSadFace';

import { FixtureWithBets } from '../../types';
import FixtureListItem from './components/fixtureListItem/FixtureListItem';

const FixturesList: React.FC = () => {
  const { fixtures } = useBets();
  const noFixtures = !fixtures || fixtures.length === 0;

  if (noFixtures) {
    return (
      <FlexContainer>
        <IconSadFace />
        <Text variant="body1" text="No games available" />
      </FlexContainer>
    );
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
