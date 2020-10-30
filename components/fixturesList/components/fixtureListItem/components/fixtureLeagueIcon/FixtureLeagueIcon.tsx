import React from 'react';
import IconPremierLeague from '../../../../../../Icons/IconPremierLeague';

import { FixtureWithBets } from '../../../../../../types';
import FlexContainer from '../../../../../flexContainer/FlexContainer';

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
