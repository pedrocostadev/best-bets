import React from 'react';

import Heading from '@/components/heading/Heading';
import FlexContainer from '@/components/flexContainer/FlexContainer';

import { FixtureWithBets } from '../../../../types';
import GoalsDistinctions from './components/goalsDistinctions/GoalsDistinctions';
import PlayersDistinctions from './components/playersDistinctions/PlayersDistinctions';

interface Props {
  fixture: FixtureWithBets;
}

const noAditialDetailsToShow = ({ fixture }: Props) => {
  const {
    betDetails: { homeTeam, awayTeam },
  } = fixture;
  return (
    [
      ...(homeTeam.goalsDistinctions.value as []),
      ...(awayTeam.goalsDistinctions.value as []),
      ...(homeTeam.fifaBestWorldPlayers.value as []),
      ...(awayTeam.fifaBestWorldPlayers.value as []),
    ].length === 0
  );
};

const AditionalDetails: React.FC<Props> = ({ fixture }) => {
  if (noAditialDetailsToShow({ fixture })) {
    return null;
  }

  const {
    betDetails: { homeTeam, awayTeam },
  } = fixture;

  return (
    <FlexContainer directionColumn columnGap rowGap paddingTop paddingBottom>
      <>
        <Heading variant="h3" text="Aditional info" />
        <GoalsDistinctions
          team={fixture.homeTeam}
          goalsDistinctions={homeTeam.goalsDistinctions}
        />
        <PlayersDistinctions
          team={fixture.homeTeam}
          bestPlayers={homeTeam.fifaBestWorldPlayers}
        />
        <GoalsDistinctions
          team={fixture.awayTeam}
          goalsDistinctions={awayTeam.goalsDistinctions}
        />
        <PlayersDistinctions
          team={fixture.awayTeam}
          bestPlayers={awayTeam.fifaBestWorldPlayers}
        />
      </>
    </FlexContainer>
  );
};

export default React.memo(AditionalDetails);
