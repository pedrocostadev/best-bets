import React from 'react';

import Stars from './components/Stars';
import { BetItemDetail } from '../../../../services/bets/types';

interface Props {
  reputation: BetItemDetail<number>;
}

const Reputation: React.FC<Props> = ({ reputation }: Props) => (
  <Stars stars={reputation.value} />
);

export default React.memo(Reputation);
