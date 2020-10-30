import React from 'react';

import IconPremierLeague from '@/icons/IconPremierLeague';
import FlexContainer from '@/components/flexContainer/FlexContainer';

import { FixtureWithBets } from '../../../../../../types';

interface Props {
  fixture: FixtureWithBets;
}

const FixtureLeagueIcon: React.FC<Props> = ({ fixture }: Props) => {
  // TODO: handle correct league icon
  // const { leagueId } = fixture;
  console.log(fixture);
  return (
    <FlexContainer paddingRight alignCenter>
      <IconPremierLeague />
    </FlexContainer>
  );
};

export default React.memo(FixtureLeagueIcon);
