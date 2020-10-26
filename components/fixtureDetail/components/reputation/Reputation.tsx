import React from 'react';

import Stars from './components/Stars';
import { BetItemDetail } from '../../../../services/bets/types';

interface Props {
  reputation: BetItemDetail;
  className?: string;
}

const Reputation: React.FC<Props> = ({ reputation, className }: Props) => (
  <span className={className}>
    <Stars stars={reputation.value as number} />
  </span>
);

export default React.memo(Reputation);
