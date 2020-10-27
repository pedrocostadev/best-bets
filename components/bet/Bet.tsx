import React from 'react';

import styles from './Bet.module.scss';
import { FixtureWithBets } from '../../types';
import betsApi from '../../services/bets';

interface Props {
  fixture: FixtureWithBets;
}

const Bet: React.FC<Props> = ({ fixture }: Props) => (
  <p className={styles.container}>
    <span className={styles.bet}>BEST BET: {betsApi.getBestBet(fixture)}</span>
  </p>
);

export default React.memo(Bet);
