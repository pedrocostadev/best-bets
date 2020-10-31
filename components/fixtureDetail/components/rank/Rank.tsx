import React from 'react';

import Text from '@/components/text/Text';

import { BetItemDetail } from '../../../../services/bets/types';

interface Props {
  rank: BetItemDetail<number>;
}

const Rank: React.FC<Props> = ({ rank }) => (
  <Text variant="body2" text={`${rank.value}º`} />
);

export default React.memo(Rank);
