import React from 'react';
import { useRouter } from 'next/router';

import FlexContainer from '@/components/flexContainer/FlexContainer';
import FixtureDate from '@/components/fixtureDate/FixtureDate';

import { FixtureInfo } from '../../../../types';
import styles from './FixtureListItem.module.scss';
import FixtureLeagueIcon from './components/fixtureLeagueIcon/FixtureLeagueIcon';

import FixtureTeams from './components/fixtureTeams/FixtureTeams';
import FixturePoints from './components/fixturePoints/FixturePoints';

interface Props {
  fixtureInfo: FixtureInfo;
}

const FixtureListItem: React.FC<Props> = ({ fixtureInfo }: Props) => {
  const router = useRouter();
  const goToFixtureDetailPage = () =>
    router.push(
      `/${fixtureInfo.fixture.leagueId}/${fixtureInfo.fixture.fixtureId}`,
    );
  return (
    <FlexContainer className={styles.container} onClick={goToFixtureDetailPage}>
      <FixtureLeagueIcon fixtureInfo={fixtureInfo} />
      <FlexContainer directionColumn className={styles.fixtureText}>
        <FixtureTeams fixtureInfo={fixtureInfo} />
        <FixturePoints fixtureInfo={fixtureInfo} />
        <FixtureDate fixtureInfo={fixtureInfo} />
      </FlexContainer>
    </FlexContainer>
  );
};

export default FixtureListItem;
