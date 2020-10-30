import React from 'react';

import { BetItemDetail } from '../../../../services/bets/types';
import Text from '../../../text/Text';

interface Props {
  rank: BetItemDetail;
}

const Rank: React.FC<Props> = ({ rank }) => (
  <Text variant="body2" text={`${rank.value}º`} />
);

export default React.memo(Rank);
