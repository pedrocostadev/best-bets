import React from 'react';

import { FixtureWithBets } from '../../../../types';
import ExtraDetails from './components/extraDetails/ExtraDetails';
import PlayersDetails from './components/playersDetails/PlayersDetails';
import Heading from '../../../heading/Heading';
import FlexContainer from '../../../flexContainer/FlexContainer';

interface Props {
  fixture: FixtureWithBets;
}

const noAditialDetailsToShow = ({ fixture }: Props) => {
  const {
    betDetails: { homeTeam, awayTeam },
  } = fixture;
  return (
    [
      ...(homeTeam.extra.value as []),
      ...(awayTeam.extra.value as []),
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
        <ExtraDetails team={fixture.homeTeam} extra={homeTeam.extra} />
        <PlayersDetails
          team={fixture.homeTeam}
          bestPlayers={homeTeam.fifaBestWorldPlayers}
        />
        <ExtraDetails team={fixture.awayTeam} extra={awayTeam.extra} />
        <PlayersDetails
          team={fixture.awayTeam}
          bestPlayers={awayTeam.fifaBestWorldPlayers}
        />
      </>
    </FlexContainer>
  );
};

export default React.memo(AditionalDetails);
