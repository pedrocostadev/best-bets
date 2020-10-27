import React from 'react';
import IconBall from '../../../../../../Icons/IconBall';

import {
  BetItemDetail,
  SpecialPoint,
} from '../../../../../../services/bets/types';
import { Team } from '../../../../../../services/fixtures/types';
import SpecialTag from './components/specialTag/SpecialTag';
import Text from '../../../../../text/Text';

interface Props {
  team: Team;
  extra: BetItemDetail;
}

const ExtraDetails: React.FC<Props> = ({ team, extra }) => {
  const details = extra.value as SpecialPoint[];
  return (
    <>
      {details.map((detail: SpecialPoint, index: number) => (
        <Text small key={index}>
          <>
            <IconBall />
            {`${team.teamName} has`}
            <SpecialTag tag={detail} />
            {'in league.'}
          </>
        </Text>
      ))}
    </>
  );
};

export default React.memo(ExtraDetails);
