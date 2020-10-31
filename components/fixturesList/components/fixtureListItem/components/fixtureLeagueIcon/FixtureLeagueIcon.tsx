import React from 'react';

import IconPremierLeague from '@/icons/IconPremierLeague';
import FlexContainer from '@/components/flexContainer/FlexContainer';

import { FixtureWithBets } from '../../../../../../types';

interface Props {
  fixture: FixtureWithBets;
}

const LEAGUE_ICONS = [
  { leagueId: 1, name: 'Premier League', icon: IconPremierLeague },
];

const FixtureLeagueIcon: React.FC<Props> = ({ fixture }: Props) => {
  const { icon: LeagueIcon } = LEAGUE_ICONS.find(
    (league) => league.leagueId === fixture.leagueId,
  );
  return (
    <FlexContainer paddingRight alignCenter>
      <LeagueIcon />
    </FlexContainer>
  );
};

export default React.memo(FixtureLeagueIcon);
