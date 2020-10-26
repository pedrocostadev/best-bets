import React from 'react';

import { BetItemDetail } from '../../../../services/bets/types';

interface Props {
  rank: BetItemDetail;
  className?: string;
}

const Rank: React.FC<Props> = ({ rank, className }) => (
  <span className={className}>{rank.value}º</span>
);

export default React.memo(Rank);
