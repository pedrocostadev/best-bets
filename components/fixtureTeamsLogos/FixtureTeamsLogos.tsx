import React from 'react';

import Text from '@/components/text/Text';

import { FixtureInfo } from '../../types';
import TeamWithLogo from './components/teamWithLogo/TeamWithLogo';
import styles from './FixtureTeamsLogos.module.scss';

interface Props {
  fixtureInfo: FixtureInfo;
}

const FixtureTeamsLogos: React.FC<Props> = ({ fixtureInfo }) => {
  const {
    fixture: { homeTeam, awayTeam },
  } = fixtureInfo;
  return (
    <div className={styles.container}>
      <TeamWithLogo team={homeTeam} />
      <Text variant="caption" as="span" text="VS" />
      <TeamWithLogo team={awayTeam} />
    </div>
  );
};

export default React.memo(FixtureTeamsLogos);
