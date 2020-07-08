import React from 'react';
import styles from './Bet.module.css';
import { FixtureWithBets } from '../../types';

interface Props {
  fixture: FixtureWithBets;
}

// TODO: Draw if it is a small difference, how much???
const getBestBet = (fixture: FixtureWithBets) => {
  if (fixture.homeTeamPoints > fixture.awayTeamPoints) {
    return `${fixture.homeTeam.teamName} wins!`;
  }

  if (fixture.awayTeamPoints > fixture.homeTeamPoints) {
    return `${fixture.awayTeam.teamName} wins!`;
  }
  return 'DRAW';
};

const Bet: React.FC<Props> = ({ fixture }: Props) => (
  <p className={styles.container}>
    <span className={styles.bet}>BEST BET: {getBestBet(fixture)}</span>
    <span className={styles.bet}>
      {fixture.homeTeamPoints}PTS vs {fixture.awayTeamPoints}PTS
    </span>
  </p>
);

export default React.memo(Bet);
