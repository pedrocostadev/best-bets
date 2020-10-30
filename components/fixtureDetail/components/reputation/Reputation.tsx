import React from 'react';

import Stars from './components/Stars';
import { BetItemDetail } from '../../../../services/bets/types';

interface Props {
  reputation: BetItemDetail;
}

const Reputation: React.FC<Props> = ({ reputation }: Props) => (
  <Stars stars={reputation.value as number} />
);

export default React.memo(Reputation);
