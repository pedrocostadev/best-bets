import React from 'react';

import Text from '@/components/text/Text';

import { FixtureWithBets } from '../../types';
import TeamWithLogo from './components/teamWithLogo/TeamWithLogo';
import styles from './FixtureTeamsLogos.module.scss';

interface Props {
  fixture: FixtureWithBets;
}

const FixtureTeamsLogos: React.FC<Props> = ({ fixture }) => {
  const { homeTeam, awayTeam } = fixture;
  return (
    <div className={styles.container}>
      <TeamWithLogo team={homeTeam} />
      <Text variant="caption" as="span" text="VS" />
      <TeamWithLogo team={awayTeam} />
    </div>
  );
};

export default React.memo(FixtureTeamsLogos);
