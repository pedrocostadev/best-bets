import React from 'react';

import Text from '@/components/text/Text';
import FlexContainer from '@/components/flexContainer/FlexContainer';

import { FixtureWithBets } from '../../../../../../types';

interface Props {
  fixture: FixtureWithBets;
}

const getBestBetTeam = (fixture: FixtureWithBets): string => {
  if (fixture.homeTeamPoints > fixture.awayTeamPoints) {
    return fixture.homeTeam.teamName;
  }

  if (fixture.awayTeamPoints > fixture.homeTeamPoints) {
    return fixture.awayTeam.teamName;
  }
  return undefined;
};

const FixtureTeams: React.FC<Props> = ({ fixture }: Props) => {
  const { homeTeam, awayTeam } = fixture;
  const bestBetTeamName = getBestBetTeam(fixture);
  return (
    <FlexContainer alignCenter columnGap>
      <>
        <Text
          variant="body1"
          text={homeTeam.teamName}
          ellipsis
          uppercase={bestBetTeamName === homeTeam.teamName}
        />
        <Text variant="caption" text="x" />
        <Text
          variant="body1"
          text={awayTeam.teamName}
          ellipsis
          uppercase={bestBetTeamName === awayTeam.teamName}
        />
      </>
    </FlexContainer>
  );
};

export default React.memo(FixtureTeams);
