import React from 'react';
import { useRouter } from 'next/router';

import FlexContainer from '@/components/flexContainer/FlexContainer';

import { FixtureWithBets } from '../../../../types';
import styles from './FixtureListItem.module.scss';
import FixtureLeagueIcon from './components/fixtureLeagueIcon/FixtureLeagueIcon';
import FixtureDate from './components/fixtureDate/FixtureDate';
import FixtureTeams from './components/fixtureTeams/FixtureTeams';

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
      <div>
        <FixtureTeams fixture={fixture} />
        <FixtureDate fixture={fixture} />
      </div>
    </FlexContainer>
  );
};

export default FixtureListItem;
