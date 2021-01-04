import React from 'react';

import useBets from '@/hooks/useBets';
import Text from '@/components/text/Text';
import GridContainer from '@/components/gridContainer/GridContainer';
import FlexContainer from '@/components/flexContainer/FlexContainer';
import IconSadFace from '@/icons/IconSadFace';

import { FixtureInfo } from '../../types';
import FixtureListItem from './components/fixtureListItem/FixtureListItem';
import styles from './FixturesList.module.scss';

const FixturesList: React.FC = () => {
  const { fixturesInfo } = useBets();
  const noFixtures = !fixturesInfo || fixturesInfo.length === 0;

  if (noFixtures) {
    return (
      <FlexContainer>
        <IconSadFace />
        <Text variant="body1" text="No games available" />
      </FlexContainer>
    );
  }

  return (
    <GridContainer className={styles.container}>
      {fixturesInfo.map((fixtureInfo: FixtureInfo) => (
        <FixtureListItem
          key={fixtureInfo.fixture.fixtureId}
          fixtureInfo={fixtureInfo}
        />
      ))}
    </GridContainer>
  );
};

export default React.memo(FixturesList);
