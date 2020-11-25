import React from 'react';

import Text from '@/components/text/Text';
import FlexContainer from '@/components/flexContainer/FlexContainer';

import { FixtureInfo } from '../../../../../../types';

interface Props {
  fixtureInfo: FixtureInfo;
}

const getBestBetTeam = (fixtureInfo: FixtureInfo): string => {
  const {
    bet: { homeTeam, awayTeam },
    fixture,
  } = fixtureInfo;

  if (homeTeam.points > awayTeam.points) {
    return fixture.homeTeam.teamName;
  }

  if (awayTeam.points > homeTeam.points) {
    return fixture.awayTeam.teamName;
  }
  return undefined;
};

const FixtureTeams: React.FC<Props> = ({ fixtureInfo }: Props) => {
  const {
    fixture: { homeTeam, awayTeam },
  } = fixtureInfo;
  const bestBetTeamName = getBestBetTeam(fixtureInfo);
  return (
    <FlexContainer alignCenter columnGap>
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
    </FlexContainer>
  );
};

export default React.memo(FixtureTeams);
