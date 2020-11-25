import React from 'react';

import useBets from '@/hooks/useBets';
import Text from '@/components/text/Text';
import FlexContainer from '@/components/flexContainer/FlexContainer';
import IconSadFace from '@/icons/IconSadFace';

import { FixtureInfo } from '../../types';
import FixtureListItem from './components/fixtureListItem/FixtureListItem';

const FixturesList: React.FC = () => {
  const { fixturesInfo } = useBets();
  const noFixtures = !fixturesInfo || fixturesInfo.length === 0;
  console.log('fixturesInfo', fixturesInfo);

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
      {fixturesInfo.map((fixtureInfo: FixtureInfo) => (
        <FixtureListItem
          key={fixtureInfo.fixture.fixtureId}
          fixtureInfo={fixtureInfo}
        />
      ))}
    </>
  );
};

export default React.memo(FixturesList);
