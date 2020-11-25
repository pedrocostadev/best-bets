import React from 'react';

import FlexContainer from '@/components/flexContainer/FlexContainer';
import IconPremierLeague from '@/icons/IconPremierLeague';

import { FixtureInfo } from '../../../../../../types';

interface Props {
  fixtureInfo: FixtureInfo;
}

const LEAGUE_ICONS = [
  { leagueId: 1, name: 'Premier League', icon: IconPremierLeague },
];

const FixtureLeagueIcon: React.FC<Props> = ({ fixtureInfo }: Props) => {
  const { icon: LeagueIcon } = LEAGUE_ICONS.find(
    (league) => league.leagueId === fixtureInfo.fixture.leagueId,
  );
  return (
    <FlexContainer paddingRight alignCenter>
      <LeagueIcon />
    </FlexContainer>
  );
};

export default React.memo(FixtureLeagueIcon);
