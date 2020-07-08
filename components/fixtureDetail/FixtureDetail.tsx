import React from 'react';
import styles from './FixtureDetail.module.css';
import { FixtureWithBets } from '../../types';
import TeamDetail from '../teamDetail/TeamDetail';
import Bet from '../bet/Bet';

interface Props {
  isCollapsed: boolean;
  fixture: FixtureWithBets;
}

const FixtureDetail: React.FC<Props> = ({ isCollapsed, fixture }) => (
  <div
    className={`${styles.betDetailsVisible} ${
      isCollapsed ? '' : styles.betDetailsHidden
    }`}
  >
    <div className={styles.detailContainer}>
      <TeamDetail
        title="Home Team"
        team={fixture.homeTeam}
        betDetails={fixture.betDetails.homeTeam}
      />
      <span className={styles.vs}>VS</span>
      <TeamDetail
        title="Away Team"
        team={fixture.awayTeam}
        betDetails={fixture.betDetails.awayTeam}
      />
    </div>
    <Bet fixture={fixture} />
  </div>
);

export default React.memo(FixtureDetail);
