import React from 'react';

import styles from './FixtureTeams.module.scss';
import { FixtureWithBets } from '../../types';
import TeamWithLogo from './components/teamWithLogo/TeamWithLogo';

interface Props {
  fixture: FixtureWithBets;
}

const FixtureTeams: React.FC<Props> = ({ fixture }) => {
  const { homeTeam, awayTeam } = fixture;
  return (
    <div className={styles.container}>
      <TeamWithLogo team={homeTeam} />
      <span className={styles.vs}>VS</span>
      <TeamWithLogo team={awayTeam} />
    </div>
  );
};

export default React.memo(FixtureTeams);
