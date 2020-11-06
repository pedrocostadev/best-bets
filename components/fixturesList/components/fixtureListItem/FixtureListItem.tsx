import React from 'react';
import { useRouter } from 'next/router';

import FlexContainer from '@/components/flexContainer/FlexContainer';

import { FixtureWithBets } from '../../../../types';
import styles from './FixtureListItem.module.scss';
import FixtureLeagueIcon from './components/fixtureLeagueIcon/FixtureLeagueIcon';
import FixtureDate from './components/fixtureDate/FixtureDate';
import FixtureTeams from './components/fixtureTeams/FixtureTeams';
import FixturePoints from './components/fixturePoints/FixturePoints';

interface Props {
  fixture: FixtureWithBets;
}

const FixtureListItem: React.FC<Props> = ({ fixture }: Props) => {
  const router = useRouter();
  const goToFixtureDetailPage = () =>
    router.push(`/${fixture.leagueId}/${fixture.fixtureId}`);
  return (
    <FlexContainer className={styles.container} onClick={goToFixtureDetailPage}>
      <FixtureLeagueIcon fixture={fixture} />
      <FlexContainer directionColumn>
        <FixtureTeams fixture={fixture} />
        <FixturePoints fixture={fixture} />
        <FixtureDate fixture={fixture} />
      </FlexContainer>
    </FlexContainer>
  );
};

export default FixtureListItem;
