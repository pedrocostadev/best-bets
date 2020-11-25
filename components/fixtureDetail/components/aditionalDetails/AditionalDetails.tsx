import React from 'react';

import Heading from '@/components/heading/Heading';
import FlexContainer from '@/components/flexContainer/FlexContainer';

import { FixtureInfo } from '../../../../types';
import GoalsDistinctions from './components/goalsDistinctions/GoalsDistinctions';
import PlayersDistinctions from './components/playersDistinctions/PlayersDistinctions';
import styles from './AditionalDetails.module.scss';

interface Props {
  fixtureInfo: FixtureInfo;
}

const noAditialDetailsToShow = ({ fixtureInfo }: Props) => {
  const {
    bet: { homeTeam, awayTeam },
  } = fixtureInfo;
  return (
    [
      ...(homeTeam.detail.goalsDistinctions.value as []),
      ...(awayTeam.detail.goalsDistinctions.value as []),
      ...(homeTeam.detail.fifaBestWorldPlayers.value as []),
      ...(awayTeam.detail.fifaBestWorldPlayers.value as []),
    ].length === 0
  );
};

const AditionalDetails: React.FC<Props> = ({ fixtureInfo }) => {
  if (noAditialDetailsToShow({ fixtureInfo })) {
    return null;
  }

  const {
    bet: { homeTeam, awayTeam },
  } = fixtureInfo;

  return (
    <FlexContainer
      className={styles.container}
      directionColumn
      columnGap
      rowGap
      paddingTop
      paddingBottom
    >
      <Heading variant="h3" text="Aditional info" />
      <GoalsDistinctions
        team={fixtureInfo.fixture.homeTeam}
        goalsDistinctions={homeTeam.detail.goalsDistinctions}
      />
      <PlayersDistinctions
        team={fixtureInfo.fixture.homeTeam}
        bestPlayers={homeTeam.detail.fifaBestWorldPlayers}
      />
      <GoalsDistinctions
        team={fixtureInfo.fixture.awayTeam}
        goalsDistinctions={awayTeam.detail.goalsDistinctions}
      />
      <PlayersDistinctions
        team={fixtureInfo.fixture.awayTeam}
        bestPlayers={awayTeam.detail.fifaBestWorldPlayers}
      />
    </FlexContainer>
  );
};

export default React.memo(AditionalDetails);
